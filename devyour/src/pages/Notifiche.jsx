import React from "react";
import LeftSidebar from "../components/shared/LeftSidebar";
import Notification from "../components/shared/Notification";
import SecondSidebar from "../components/shared/SecondSidebar";
import ProfileCard from "../components/shared/ProfileCard";
import UsersSuggested from "../components/shared/UsersSuggested";

function Notifiche() {
  return (
    <>
        <div className="flex max-w-7xl mx-auto">
        <main className="flex gap-6 container px-2 mx-auto">
          <SecondSidebar />
          <aside className="hidden basis-1/6 md:block ">
            <div className="sticky top-0 h-screen">
              <LeftSidebar />
            </div>
          </aside>

          <Notification/>

          <aside className="basis-1/6 hidden md:block">
            <div className="sticky top-4">
              <ProfileCard />
              <UsersSuggested />
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}

export default Notifiche;
