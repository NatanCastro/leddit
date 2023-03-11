import Input from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import { Form } from "@unform/web";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { LoginReq, Response } from "@/types/form";
import { useState } from "react";
import { Error } from "@/components/error";
import Head from "next/head";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(data: LoginReq) {
    try {
      let res: AxiosResponse<Response> = await axios.post(
        "http://localhost:6969/login",
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
    <>
      <Head>
        <title>login</title>
      </Head>
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
          <h1 className="text-2xl text-cente">Login</h1>
          <Form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-y-4">
            <div className="input-field">
              <label htmlFor="email">email:</label>
              <Input type="email" name="email" placeholder="email" />
            </div>
            <div className="input-field">
              <label htmlFor="password">pasword:</label>
              <Input type="password" name="password" placeholder="senha" />
            </div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-800 hover:text-white py-3 rounded-xl transition-colors"
            >
              Login
            </button>
            {error && <Error clr={setError}>{error}</Error>}
          </Form>
        </div>
      </div>
    </>
  );
}
