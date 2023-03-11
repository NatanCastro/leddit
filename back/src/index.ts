import express, { json } from "express";
import { PrismaClient, user } from "@prisma/client";
import cors from "cors";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();
const app = express();
const port = 6969;

app.use(json());
app.use(cors());

app.get("/posts", async (_, res) => {
  await prisma.$connect();
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  await prisma.$disconnect();
  res.json(posts);
});

app.post("/posts/create", async (req, res) => {
  const body = req.body;
  await prisma.$connect();
  await prisma.post.create({
    data: {
      title: body.title,
      body: body.body,
      user_id: req.body.user_id,
    },
  });
  await prisma.$disconnect();
  res.status(201).send("post created");
});

app.post("/register", async (req, res) => {
  const body: user = req.body;
  const user = await prisma.user.findMany({
    where: {
      OR: [{ name: body.name }, { email: body.email }],
    },
  });
  if (user.length > 0) {
    res.status(409).send("Usuario e/ou email em uso");
    return;
  }

  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    },
  });

  const { id } = (await prisma.user.findUniqueOrThrow({
    where: {
      name: req.body.name,
    },
  })) as user;

  res.status(201).send({
    userExists: false,
    id: id,
  });
});

app.post("/login", async (req, res) => {
  const body: user = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user === null) {
    res.status(400).send("Usuario não existente");
    return;
  }

  if (!(await bcrypt.compare(body.password, user.password))) {
    res.status(400).send("senha errada");
    return;
  }

  res.status(201).send({
    userExists: true,
    id: user?.id,
  });
});

app.get("/user/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (id.toString() === "NaN") {
    res.status(400).send({
      user: null,
    });
    return;
  }
  const user: user | null = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (user === null) {
    res.status(404).send({
      message: "User not found",
    });
    return;
  }

  res.send({
    user: user,
  });
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
