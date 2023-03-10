import Image from "next/image";
import Link from "next/link";
import { Form } from "@unform/web";
import Input from "@/components/input";
import { SignInReq, Response } from "@/types/form";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(data: SignInReq) {
    try {
      let res: AxiosResponse<Response> = await axios.post(
        "http://localhost:6969/register",
        data
      );
      const resData = res.data;

      sessionStorage.setItem("id", `${resData.id}`);
      router.push("/");
    } catch (e: any) {
      setError(e.response.data);
    }
  }

  return (
    <div className="grid place-items-center h-screen bg-gray-400 text-xl">
      <div className="flex flex-col p-5 items-center gap-y-2 bg-white rounded-lg">
        <nav className="w-full flex">
          <Link href="/" className="w-auto">
            <Image
              src="static/arrow.svg"
              alt="voltar para pagina inicial"
              width={24}
              height={24}
              className="rotate-90"
            />
          </Link>
        </nav>
        <Image src="static/user.svg" alt="user icon" width={64} height={64} />
        <h1 className="text-2xl text-cente">Signin</h1>
        <Form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col mt-5 gap-y-4"
        >
          <div className="input-field">
            <label htmlFor="name">name:</label>
            <Input type="text" name="name" ph="name" />
          </div>
          <div className="input-field">
            <label htmlFor="email">email:</label>
            <Input type="email" name="email" ph="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">pasword:</label>
            <Input type="password" name="password" ph="password" />
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-800 hover:text-white py-3 rounded-xl transition-colors"
          >
            signin
          </button>
          {error && (
            <div className="bg-red-200 border border-red-600 text-center text-red-600 px-2 py-3 rounded mx-auto">
              {error}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
