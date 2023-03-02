import cardData from "@/types/card";

export const Card = ({ user, title, body }: cardData) => {
  return (
    <div className="card">
      <span className="text-gray-400">u/{user}</span>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-justify">{body}</p>
    </div>
  );
};
