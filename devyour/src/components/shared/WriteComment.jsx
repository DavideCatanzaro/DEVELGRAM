import React from "react";
import ButtonSend from "../atoms/ButtonSend";

export default function WriteComment() {
  return (
    <>
      <form className="flex grow">
        <input
          type="text"
          id="text"
          placeholder="Write a comment..."
          className="border-1 peer block w-full rounded-lg border border-blue bg-transparent px-2 text-sm text-grey focus:border-pink focus:outline-none focus:ring-0"
        />
        <span className="flex justify-center items-center">
          <ButtonSend />
        </span>
      </form>
    </>
  );
}
