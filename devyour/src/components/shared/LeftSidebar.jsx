import React from "react";
import ButtonToggle from "../atoms/ButtonToggle";

function LeftSidebar() {
  return (
    <div className="min-h-screen w-screen bg-white ">
      <div className="absolute left-0 flex h-screen w-72 flex-col overflow-hidden rounded-r-1xl bg-white text-grey border-r-2 border-grey">
        <img
          src="DevYour.png"
          alt="log"
          style={{
            width: "70%",
            height: "9%",
            marginTop: "30px",
            marginLeft: "10px",
          }}
        />
        <ul className="mt-20 space-y-3">
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold text-grey hover:text-pink">
            <span>
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
            </span>
            <span className="">Home</span>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold text-grey hover:text-blue">
            <span>
              <svg
                className="h-6 w-6 align-middle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8" class=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
              </svg>
            </span>
            <span className="">Cerca</span>
            <svg
              className="absolute -top-1/2 -right-1 h-32 w-8 text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="4em"
            >
              <path
                fill="currentColor"
                d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
              />
            </svg>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-grey font-semibold hover:text-pink">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </span>
            <span className="">Messaggi</span>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold text-grey hover:text-blue">
            <span className="text-2xl">
              <svg
                className="h-7 w-7"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                ></path>
              </svg>
            </span>
            <span className="">Notifiche</span>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-grey font-semibold hover:text-pink">
            <span>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
            </span>
            <span className="">Crea</span>
          </li>
        </ul>

        <div className="my-6 mt-auto ml-1 flex cursor-pointer">
          <ButtonToggle />
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
