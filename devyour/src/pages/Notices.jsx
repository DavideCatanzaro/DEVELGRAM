import React, { useState } from "react";
import Notification from "../components/shared/Notification";
import Navbar from "../components/shared/Navbar";
import ProfileCard from "../components/shared/ProfileCard";
import UsersSuggested from "../components/shared/UsersSuggested";
import StartFollow from "../components/atoms/StartFollow";
import UnfollowU from "../components/atoms/UnfollowU";
import CommentYourPost from "../components/atoms/CommentYourPost";
import LikeYourPost from "../components/atoms/LikeYourPost";
import LikeYourComment from "../components/atoms/LikeYourComment";
import RepliedComment from "../components/atoms/RepliedComment";
import NewContent from "../components/shared/NewContent";
import SearchModal from "../components/shared/SearchModal";

function Notices() {
  const [newPost, setNewPost] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)

  const handleCreatePost = () => {
    if (newPost === false) {
      setNewPost(true)
    } else {
      setNewPost(false)
    }
  }
  return (
    <>
      {
        newPost &&
        <NewContent createPost={handleCreatePost} />
      }
      {
        showSearchModal &&
        <SearchModal setShowSearchModal={setShowSearchModal} />
      }
      <div className="flex max-w-7xl mx-auto">
        <main className="flex sm:gap-6 container px-2 mx-auto">
          <Navbar createPost={handleCreatePost} setShowSearchModal={setShowSearchModal} />

          <div className="basis-2/3 grow">
            <div className="sticky top-4 flex flex-row justify-between rounded-xl h-screen ">
              <div className="rounded-xl bg-white border border-blue p-4 shadow-lg w-full m-4 overflow-auto">
                <div className="mb-4 flex justify-between border-b pb-3">
                  <p className="text-xl font-bold text-grey">Notices</p>
                </div>
                <div className="">
                  <div className="flex flex-col gap-3">
                    <Notification notice={<StartFollow />} />
                    <Notification notice={<UnfollowU />} />
                    <Notification notice={<CommentYourPost />} />
                    <Notification notice={<LikeYourComment />} />
                    <Notification notice={<LikeYourPost />} />
                    <Notification notice={<RepliedComment />} />
                  </div>
                </div>
              </div>
            </div>
          </div>

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

export default Notices;
