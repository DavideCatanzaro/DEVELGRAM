import React, { useState } from "react";
import WriteComment from "./WriteComment";
import Comments from "./Comments";

export default function Post({
  imgProfile,
  nameProfile,
  username,
  imgPost,
  descriptionPost,
  postDate,
}) {

  const [likes, setLikes] = useState(0)

  const incrementLikes = (e) => {
    e.preventDefault()
    const increment = likes + 1;
    setLikes(increment)
  }

  return (
    <>
      <div className="mb-4 rounded-xl bg-white flex flex-col shadoww-full">
        <div className="flex">
          <div className="rounded-full">
            <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
          </div>
          <div className="flex flex-col grow mb-2 ml-4 mt-1">
            <div className="text-grey text-sm font-semibold">{nameProfile}</div>
            <div className="flex mt-1">
              <div className="text-grey font-base text-xs grow cursor-pointer">{username}</div>
              <div className="text-grey font-thin text-xs">{postDate}</div>
            </div>
          </div>
        </div>
        
                    <img className="h-full w-full object-cover rounded-lg" src={imgPost} alt="img" />
        <div className="py-4">
                </div>






      </div>
    </>
  );
}
