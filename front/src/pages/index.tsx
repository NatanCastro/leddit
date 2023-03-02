import { Card } from "@/components/card";
import { Header } from "@/components/home/header";
import { Sidebar } from "@/components/home/sidebar";
import cardData from "@/types/card";

export default function Home({ cards }: { cards: cardData[] | null }) {
  return (
    <div className="bg-gray-300 grid main">
      <Header />
      <Sidebar />
      <main className="flex flex-col gap-y-4 items-center py-5">
        {cards?.map((card) => {
          return <Card {...card} key={card.title} />;
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
