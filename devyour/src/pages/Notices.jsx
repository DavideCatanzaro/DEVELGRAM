import React from "react";
import Notification from "../components/shared/Notification";
import Navbar from "../components/shared/Navbar";

function Notices() {
  return (
    <>
      <main className="flex gap-6 container px-2 mx-auto">
        <Navbar />
        <Notification />
      </main>
    </>
  );
}

export default Notices;
