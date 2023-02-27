import express from "express";
const app = express();
const port = 6969;

type user = {
  name: string;
  age: number;
};

app.get("/", (_, res) => {
  const users: user[] = [
    {
      name: "natan",
      age: 17,
    },
    {
      name: "maria",
      age: 20,
    },
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
