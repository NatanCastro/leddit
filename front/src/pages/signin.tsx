import Image from "next/image";
import Link from "next/link";
import { Form } from "@unform/web";
import Input from "@/components/input";
import { SignInReq, Response } from "@/types/form";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  async function handleSubmit(data: SignInReq) {
    let res: AxiosResponse<Response> = await axios.post(
      "http://localhost:6969/register",
      data
    );
    const resData = res.data;

    if (resData.userExists) {
      alert("usuario e/ou email em uso");
      return;
    }
    sessionStorage.setItem("id", `${resData.id}`);
    router.push("/");
  }

  return (
    <div className="grid place-items-center h-screen bg-gray-400 text-xl">
      <div className="flex flex-col p-5 items-center gap-y-2 bg-white rounded-lg">
        <nav className="w-full flex">
          <Link href="/" className="w-auto">
            <Image
              src="arrow.svg"
              alt="voltar para pagina inicial"
              width={24}
              height={24}
              className="rotate-90"
            />
          </Link>
        </nav>
        <Image src="user.svg" alt="user icon" width={64} height={64} />
        <h1 className="text-2xl text-cente">Signin</h1>
        <Form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col mt-5 gap-y-4"
        >
          <div className="input-field">
            <label htmlFor="name">name:</label>
            <Input type="text" name="name" />
          </div>
          <div className="input-field">
            <label htmlFor="email">email:</label>
            <Input type="email" name="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">pasword:</label>
            <Input type="password" name="password" />
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-800 hover:text-white py-3 rounded-xl transition-colors"
          >
            signin
          </button>
        </Form>
      </div>
    </div>
  );
}
