import React from "react";

export default function Comment({
  imageProfile,
  nameProfile,
  comment,
  timePost,
  likes,
}) {
  return (
    <>
      <div className="text-grey flex pl-4">
        <img className="rounded-full h-8 w-8 mt-1 " src="https://picsum.photos/id/1027/200/200" alt="" />
        <div className="bg-white rounded-lg px-4 pt-2 pb-2.5">
          <div className="flex">
            <div className="flex grow font-semibold text-sm leading-relaxed">Sara Lauren</div>
            <div className="flex text-xs  mt-0.5 text-gray-500">14 w</div>
          </div>
          <div className="text-xs leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
      </div>
    </>
  );
}
