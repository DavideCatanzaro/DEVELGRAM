import React from "react";
import WriteComment from "./WriteComment";

export default function Post({
  imgProfile,
  nameProfile,
  imgPost,
  stringPost,
  likes,
  descriptionPost,
  postDate,
}) {
  return (
    <>
      <div className="mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-md shadow">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="#">
              <img
                className="rounded-full max-w-none w-14 h-14"
                src={imgProfile}
                alt=""
              />
            </a>
            <div className="flex flex-col">
              <div className="flex items-center">
                <a className="inline-block text-lg font-bold mr-2" href="#">
                  {nameProfile}
                </a>
                <span>
                  <svg className="fill-blue-500 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                  </svg>
                </span>
              </div>
              <div className="text-slate-500">{postDate}</div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold">
          {stringPost}
        </h2>
        <div className="py-4">
          <a className="flex" href="#">
            <img
              className="max-w-full rounded-lg"
              src={imgPost}
              alt=""
            />
          </a>
        </div>
        <p>
          {descriptionPost}
        </p>
        <div className="py-4">
          <a className="inline-flex items-center" href="#">
            <span className="mr-2">
              <svg
                className="fill-rose-600"
                style={{width: "24px", height: "24px"}}
                viewBox="0 0 24 24"
              >
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </span>
            <span className="text-lg font-bold">{likes}</span>
          </a>
        </div>
        <WriteComment/>
        {/* <!-- Comments content --> */}
        <div className="pt-6">
          {/* <!-- Comment row --> */}
          <div className="media flex pb-4">
            <a className="mr-4" href="#">
              <img
                className="rounded-full max-w-none w-12 h-12"
                src="https://randomuser.me/api/portraits/men/83.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="#">
                  Ronald Richards
                </a>
                <span className="text-slate-500">25 minutes ago</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod ???
              </p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="#">
                  <span className="mr-2">
                    <svg
                      className="fill-rose-600"
                      style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">2</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 rounded-lg transition">
                  Repply
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End comments row -->
            <!-- comments row --> */}
          <div className="media flex pb-4">
            <a className="inline-block mr-4" href="#">
              <img
                className="rounded-full max-w-none w-12 h-12"
                src="https://randomuser.me/api/portraits/women/74.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="#">
                  Natalia Jímenez
                </a>
                <span className="text-slate-500">3 minutes ago</span>
              </div>
              <p>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="#">
                  <span className="mr-2">
                    <svg
                      className="fill-rose-600"
                      style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">2</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 rounded-lg transition">
                  Repply
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End comments row -->
            <!-- More comments --> */}
          <div className="w-full">
            <a
              href="#"
              className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75"
            >
              Show more comments
            </a>
          </div>
          {/* <!-- End More comments --> */}
        </div>
        {/* <!-- End Comments content --> */}
      </div>
    </>
  );
}
