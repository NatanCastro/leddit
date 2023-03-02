import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="top-0 sticky col-span-full flex items-center justify-between px-5 py-4 bg-white">
        <Image src="next.svg" alt="" width={200} height={20} />
        <nav>
          {true ? (
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
            <div className="flex w-fit">
              <span>{}</span>
              <Image src="user.svg" alt="" width={40} height={40} />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
