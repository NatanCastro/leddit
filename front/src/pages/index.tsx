import { Card } from "@/components/card";
import { Header } from "@/components/home/header";
import { Sidebar } from "@/components/home/sidebar";
import cardData from "@/types/card";
import { user } from "@/types/user";
import axios from "axios";
import { useQuery } from "react-query";

export default function Home({ cards }: { cards: cardData[] | null }) {
  const { isLoading, error, data } = useQuery<
    { user: user },
    { message: string }
  >("user", async () => {
    const id = sessionStorage.getItem("id");
    try {
      const res = await axios.get(`http://localhost:6969/user/${id}`);
      if (res.status === 400) throw Error("usuario não encontrado");
      return res.data;
    } catch (e: any) {
      console.log(e.message);
      return null;
    }
  });

  if (isLoading) return "Loading...";
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="bg-gray-300 grid main">
      <Header user={data?.user || null} />
      <Sidebar />
      <main className="flex flex-col gap-y-4 items-center py-5">
        {cards?.map((card) => {
          return <Card {...card} key={card.id} />;
        })}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const p = await fetch("http://localhost:6969/posts");
  const cards: cardData[] | null = await p.json();

  return {
    props: {
      cards: cards,
    },
  };
}
