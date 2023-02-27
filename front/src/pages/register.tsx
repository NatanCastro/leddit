export default function Register() {
  return (
    <div className="grid place-items-center h-screen bg-gray-500">
      <form
        action="http://localhost:6969/register"
        className="flex flex-col w-max p-4 gap-y-5 rounded-lg bg-white"
      >
        <fieldset>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            required
            className="bg-gray-200 rounded"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">email:</label>
          <br />
          <input
            type="email"
            id="email"
            required
            className="bg-gray-200 rounded"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">password:</label>
          <br />
          <input
            type="password"
            id="password"
            required
            className="bg-gray-200 rounded"
          />
        </fieldset>
        <input
          type="submit"
          value="singup"
          className="bg-slate-900 text-white self-center py-1 px-2 rounded"
        />
      </form>
    </div>
  );
}
