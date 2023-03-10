import { Card } from "@/components/card";
import { Header } from "@/components/home/header";
import { Sidebar } from "@/components/home/sidebar";
import useUser from "@/hooks/getUser";
import cardData from "@/types/card";
import Head from "next/head";

export default function Home({ cards }: { cards: cardData[] | null }) {
  const { isLoading, error, data } = useUser();

  if (isLoading) return "Loading...";
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-gray-300 grid main">
        <Header user={data?.user || null} />
        <Sidebar />
        <main className="flex flex-col gap-y-4 items-center py-5">
          {cards?.map((card) => {
            return <Card {...card} key={card.id} />;
          })}
        </main>
      </div>
    </>
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
