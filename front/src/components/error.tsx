import Image from "next/image";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

export const Error = (props: {
  children: ReactNode;
  clr: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex items-center justify-center bg-red-200 border border-red-600 text-center text-red-600 px-2 py-3 rounded mx-auto">
      {props.children} &nbsp;
      <Image
        src="/static/close.svg"
        width={24}
        height={24}
        alt="close error"
        onClick={() => props.clr("")}
        className="cursor-pointer"
      />
    </div>
  );
};
