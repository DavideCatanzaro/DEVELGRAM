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
      <div className="media flex pb-4">
        <a className="mr-4" href="#">
          <img
            className="rounded-full max-w-none w-12 h-12"
            src={imageProfile}
            alt=""
          />
        </a>
        <div className="media-body">
          <div>
            <a className="inline-block text-base font-bold mr-2" href="#">
              {nameProfile}
            </a>
            <span className="text-slate-500">{timePost}</span>
          </div>
          <p>{comment}</p>
          <div className="mt-2 flex items-center">
            <a className="inline-flex items-center py-2 mr-3" href="#">
              <span className="mr-2">
                <svg
                  className="fill-rose-600"
                  style={{ width: "22px", height: "22px" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg>
              </span>
              <span className="text-base font-bold">{likes}</span>
            </a>
            <button className="py-2 px-4 font-medium hover:bg-slate-50 rounded-lg transition">
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
