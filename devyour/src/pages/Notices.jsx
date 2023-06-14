import React from "react";
import Notification from "../components/shared/Notification";
import Navbar from "../components/shared/Navbar";

function Notices() {
  return (
    <>
      <div className="flex max-w-7xl mx-auto">
        <main className="flex gap-6 container px-2 mx-auto">
          <Navbar />

          <div className="basis-5/6 grow">
            <Notification />
          </div>

        </main>
      </div>
    </>
  );
}

export default Notices;
