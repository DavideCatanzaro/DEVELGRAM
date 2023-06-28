import React from "react";
import Comment from "./Comment";

export default function Comments() {
  return (
    <>
      <div className="flex flex-col gap-1  w-full">
        <Comment />
        <div className="w-full">
          <div className="w-full block bg-blue text-center rounded-lg text-sm hover:bg-pink transition ease-in-out delay-75">
            Show more comments
          </div>
        </div>
      </div>
    </>
  );
}
