import { useState } from "react";
import { Link } from "react-router-dom";

function SecondSidebar() {
  const [view, setView] = useState(false)

  const handleView = () => {
    if(view === false) {
      setView(true)
    } else {
      setView(false)
    }
  }

  return (
    <>
      <div className="md:hidden absolute bottom-0 left-[50%] bg-white mx-auto dark:bg-grey h-screen pattern">
        <nav className="z-20 flex shrink-0 grow-1 justify-around gap-1 border-t border-blue bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-pink dark:bg-gray fixed bottom-2 -translate-x-2/4 min-h-[auto] min-w-[auto] rounded-lg border">
          <Link to="/devyour">
            <a
              href="/"
              className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-grey hover:bg-blue dark:text-white dark:hover:bg-pink"
            >
              <svg
                className=" h-6 w-6 align-middle"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  class=""
                ></path>
              </svg>

              <small className="text-xs font-semibold">Home</small>
            </a>
          </Link>

          <a
            href="#near"
            className="hidden md:flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-grey hover:bg-blue dark:text-white dark:hover:bg-pink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <small className="text-center text-xs font-semibold"> Near </small>
          </a>
          <Link to="/messages">
            <a
              href="#messages"
              className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-grey hover:bg-blue dark:text-white dark:hover:bg-pink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <small className="text-center text-xs font-semibold">
                {" "}
                Messages{" "}
              </small>
            </a>
          </Link>

          <Link to="/notices">
            <a
              href="#notices"
              className="hidden md:flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-grey hover:bg-blue dark:text-white dark:hover:bg-pink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>

              <small className="text-center text-xs font-semibold">
                {" "}
                Notices{" "}
              </small>
            </a>
          </Link>

          <a
            href="#create"
            className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-grey hover:bg-blue dark:text-white dark:hover:bg-pink"
          >
            <svg
              className="h-5 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>

            <small className="text-center text-xs font-semibold">
              {" "}
              Create{" "}
            </small>
          </a>
          <Link to="/userProfile">
            <a
              href="#profile"
              className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-grey hover:bg-blue dark:text-white dark:hover:bg-pink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>

              <small className="text-center text-xs font-semibold">
                {" "}
                Profile{" "}
              </small>
            </a>
          </Link>
          <div className="border-blue w-[1px] bg-blue"></div>
          <hr className="text-blue" />

          <a
            href="#settings"
            className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-grey hover:bg-blue dark:text-white dark:hover:bg-pink"
            onClick={handleView}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <small className="text-center text-xs font-semibold">
              {" "}
              Settings{" "}
            </small>
          </a>
        </nav>
        <div className={`${view ? "flex" : "hidden"} `}>
          <div>Logout</div>
        </div>
      </div>
    </>
  );
}

export default SecondSidebar;
