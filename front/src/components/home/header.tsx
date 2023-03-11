import { user } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = ({ user }: { user: user | null }) => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("id");
    router.reload();
  };

  return (
    <>
      <header className="h-[4.5rem] top-0 sticky col-span-full flex items-center justify-between px-5 bg-white">
        <Link href="/">
          <Image src="/static/next.svg" alt="" width={200} height={40.59} />
        </Link>
        <nav>
          {user === null ? (
            <ul className="list-none flex gap-x-4">
              <li>
                <Link className="headerLink" href="/signin">
                  signin
                </Link>
              </li>
              <li>
                <Link className="headerLink" href="/login">
                  login
                </Link>
              </li>
            </ul>
          ) : (
            <div className="flex w-fit gap-x-4 items-center justify-center text-sm">
              <Link className="headerLink" href="/posts/create">
                Criar Post
              </Link>
              <button className="headerLink" onClick={handleLogout}>
                logout {user.name}
              </button>
              <Image
                src="/static/user.svg"
                alt=""
                width={40}
                height={40}
                onClick={() => console.log(user.name)}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
