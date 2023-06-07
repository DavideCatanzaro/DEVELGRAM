import React from "react";
import LeftSidebar from "../components/shared/LeftSidebar";
import Notification from "../components/shared/Notification";
import SecondSidebar from "../components/shared/SecondSidebar";

function Notifiche() {
  return (
    <>
      <main className="flex gap-6 container px-2 mx-auto">
        <SecondSidebar />
        <aside className="hidden basis-1/6 md:block ">
          <div className="sticky top-0 h-screen">
            <LeftSidebar />
          </div>
        </aside>
        <Notification />
      </main>
    </>
  );
}

export default Notifiche;
