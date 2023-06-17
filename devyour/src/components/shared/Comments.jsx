import React from "react";
import Comment from "./Comment";

export default function Comments() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Comment
          imageProfile="https://randomuser.me/api/portraits/men/83.jpg"
          nameProfile="Fake Name"
          timePost="2 hour ago"
          comment="Very good photo, I like it"
          likes="3"
        />
        <Comment
          imageProfile="https://randomuser.me/api/portraits/men/83.jpg"
          nameProfile="Fake Name"
          timePost="2 hour ago"
          comment="Very good photo, I like it"
          likes="3"
        />
        <div className="w-full">
          <div className="w-full block bg-blue text-center rounded-lg text-sm hover:bg-pink transition ease-in-out delay-75">
            Show more comments
          </div>
        </div>
      </div>
    </>
  );
}
