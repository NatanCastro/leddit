import Image from "next/image";
import Link from "next/link";

export default function signin() {
  return (
    <div className="grid place-items-center h-screen bg-gray-400 text-xl">
      <div className="flex flex-col p-5 items-center gap-y-2 bg-white rounded-lg">
        <nav className="w-full flex">
          <Link href="/" className="w-auto">
            <Image
              src="arrow.svg"
              alt="voltar para pagina inicial"
              width={24}
              height={24}
              className="rotate-90"
            />
          </Link>
        </nav>
        <Image src="user.svg" alt="user icon" width={64} height={64} />
        <h1 className="text-2xl text-cente">Signin</h1>
        <form action="" className="flex flex-col mt-5 gap-y-4">
          <div className="input-field">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              id="email"
              className="input"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">pasword:</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              required
            />
          </div>
          <input
            type="submit"
            value="signin"
            className="bg-teal-500 hover:bg-teal-800 hover:text-white py-3 rounded-xl transition-colors"
          />
        </form>
      </div>
    </div>
  );
}
