import Image from "next/image";
import React from "react";

export const Loading = () => {
  return (
    <div className="grid place-content-center h-screen gap-4">
      <h1 className="text-center text-8xl">Loading...</h1>
      <Image
        src="/static/loading.svg"
        alt=""
        width={100}
        height={100}
        className="animate-spin mx-auto"
      />
    </div>
  );
};
