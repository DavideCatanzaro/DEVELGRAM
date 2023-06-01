import React from "react";
import Comment from "./Comment";

export default function Comments() {
  return (
    <>
      <div className="pt-6">
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
          <a
            href="#"
            className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75"
          >
            Show more comments
          </a>
        </div>
      </div>
    </>
  );
}
