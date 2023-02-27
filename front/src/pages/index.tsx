type user = {
  name: string;
  age: number;
};

export default function Home({ teste }: { teste: user[] }) {
  return (
    <>
      <header>
        <nav>
          <a href="/register">register</a>
        </nav>
      </header>
    </>
  );
}

export async function getStaticProps() {
  const t = await fetch("http://localhost:6969/");
  const teste: user[] = await t.json();

  return {
    props: {
      teste,
    },
  };
}
