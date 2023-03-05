import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="col-start-1 h-[calc(100vh-72.59px)] w-full bg-white px-5 overflow-y-scroll top-[72.59px] sticky text-sm">
      <section className="mb-3">
        <h3 className="subjectTitle">feeds</h3>
        <ul className="flex flex-col gap-y-3">
          <li>
            <Link href="" className="flex items-center justify-start">
              <Image
                src="home.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block mr-4"
              />
              Página inicial
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-start">
              <Image
                src="trending.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block mr-4"
              />
              Popular
            </Link>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h3 className="subjectTitle">Assuntos</h3>
        <ul className="flex flex-col gap-y-3">
          <li>
            <Link href="" className="flex items-center justify-between">
              <span>
                <Image
                  src="gaming.svg"
                  alt="gaming"
                  width={24}
                  height={24}
                  className="inline-block mr-4"
                />
                gaming
              </span>
              <Image
                src="arrow.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block"
              />
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-between">
              <span>
                <Image
                  src="sports.svg"
                  alt="sports"
                  width={24}
                  height={24}
                  className="inline-block mr-4"
                />
                sports
              </span>
              <Image
                src="arrow.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block"
              />
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-between">
              <span>
                <Image
                  src="business.svg"
                  alt="business"
                  width={24}
                  height={24}
                  className="inline-block mr-4"
                />
                business
              </span>
              <Image
                src="arrow.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block"
              />
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-between">
              <span>
                <Image
                  src="crypto.svg"
                  alt="crypto"
                  width={24}
                  height={24}
                  className="inline-block mr-4"
                />
                crypto
              </span>
              <Image
                src="arrow.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block"
              />
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-between">
              <span>
                <Image
                  src="television.svg"
                  alt="television"
                  width={24}
                  height={24}
                  className="inline-block mr-4"
                />
                television
              </span>
              <Image
                src="arrow.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block"
              />
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-between">
              <span>
                <Image
                  src="more.svg"
                  alt="more categories"
                  width={24}
                  height={24}
                  className="inline-block mr-4"
                />
                more categories
              </span>
              <Image
                src="arrow.svg"
                alt=""
                width={24}
                height={24}
                className="inline-block"
              />
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};