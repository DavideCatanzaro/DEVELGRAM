import React from "react";
import LeftSidebar from "../components/shared/LeftSidebar";
import Notification from "../components/shared/Notification";

function Notifiche() {
  return (
    <>
      <main className="flex gap-6 container px-2 mx-auto">
        <aside className="basis-1/6  md:block">
              <div className="h-screen sticky top-0">
                <LeftSidebar />
              </div>
            </aside>
        <Notification/>
      </main>
    </>
  );
}

export default Notifiche;
