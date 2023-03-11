import { Header } from "@/components/home/header";
import { Sidebar } from "@/components/home/sidebar";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import useUser from "@/hooks/getUser";
import { Form } from "@unform/web";
import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Create() {
  const { isLoading, error, data } = useUser();

  const router = useRouter();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (!id) {
      router.push("/");
    }
  }, [router]);

  async function handleSubmit(data: {
    title: string;
    body: string;
    user_id: number;
  }) {
    data.user_id = Number(sessionStorage.getItem("id"));
    try {
      let res: AxiosResponse<Response> = await axios.post(
        "http://localhost:6969/posts/create",
        data
      );
      alert(res.data);
      router.push("/");
    } catch (e: any) {
      alert(e);
    }
  }

  if (isLoading) return "Loading...";
  if (error) return `An error has occurred: ${error.message}`;
  return (
    <>
      <Head>
        <title>create post</title>
      </Head>
      <div className="bg-gray-300 h-screen grid main">
        <Header user={data?.user || null} />
        <Sidebar />

        <div className="mx-10 mt-10">
          <nav className="w-full flex">
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-white transition-colors"
            >
              <Image
                src="/static/arrow.svg"
                width={24}
                height={24}
                alt=""
                className="rotate-90"
              />
            </Link>
          </nav>
          <Form onSubmit={handleSubmit} className="py-4 flex flex-col gap-y-3">
            <label htmlFor="title" className="sr-only">
              title
            </label>
            <Input
              type="text"
              name="title"
              id="title"
              className="border-black border focus-visible:outline-teal-500 rounded indent-2 py-1"
              placeholder="title"
              maxLength={200}
            />
            <label htmlFor="body" className="sr-only">
              body text
            </label>
            <Textarea
              name="body"
              id="body"
              cols={30}
              rows={10}
              className="border-black border resize-none focus-visible:outline-teal-500 rounded indent-2"
              placeholder="body text"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-800 hover:text-white px-4 py-3 rounded-xl transition-colors mr-auto"
            >
              Create
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
