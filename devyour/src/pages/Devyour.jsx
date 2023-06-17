import Post from "../components/shared/Post";
import NewContent from "../components/shared/NewContent";
import UsersSuggested from "../components/shared/UsersSuggested";
import Shoots from "../components/shared/Shoots";
import Post2 from "../components/shared/Post2";
import ProfileCard from "../components/shared/ProfileCard";
import Navbar from "../components/shared/Navbar";
import { useState } from "react";

function DevYour() {
  const [newPost, setNewPost] = useState(false)

  const handleCreatePost = () => {
    if (newPost === false) {
      setNewPost(true)
    } else {
      setNewPost(false)
    }
  }

  return (
    <>
      {newPost && <div className="fixed top-0 h-screen w-full z-30 flex justify-center items-center bg-black/75">
              <div className="absolute top-10 items-center justify-center w-1/2">
                <NewContent createPost={handleCreatePost}/>
              </div>
            </div>}
      <div className="flex max-w-7xl mx-auto">
        <main className="flex gap-6 container px-2 mx-auto">
          <Navbar createPost={handleCreatePost} />

          <div className="basis-2/3 grow">
            <div className="sticky top-0 py-4">
              <div className="sticky top-0 bg-white rounded-xl shadow">
                <Shoots />
              </div>
            </div>
            <div className="flex flex-col mx-auto">
              <div className="sticky top-0 w-full bg-white rounded-xl shadow">
                <div className="sticky top-0"></div>
              </div>
              <Post
                imgProfile="https://randomuser.me/api/portraits/men/9.jpg"
                nameProfile="Pietro Amato"
                imgPost="https://picsum.photos/500/500"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Post2
                imgProfile="./assets/profile-img/Andrea-profile.jpg"
                nameProfile="Andrea A. D'Onorio De Meo"
                imgPost="https://picsum.photos/500/250"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/men/7.jpg"
                nameProfile="Davide Catanzaro"
                imgPost="https://picsum.photos/450/300"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/men/6.jpg"
                nameProfile="Maurilio Farina"
                imgPost="https://picsum.photos/500/350"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
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

export default DevYour;
