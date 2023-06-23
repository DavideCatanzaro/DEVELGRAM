import Separator from "../components/atoms/Separator";
import UsersSuggested from "../components/shared/UsersSuggested";
import ProfileCard from "../components/shared/ProfileCard";
import Navbar from "../components/shared/Navbar";
import { useState, useEffect } from "react";
import NewContent from '../components/shared/NewContent'
import SearchModal from "../components/shared/SearchModal";

const Following = () => {
  const [following, setFollowing] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:6700/api/followers-data");
      const data = await response.json();
      setFollowing(data.following);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
            <div className="sticky top-0 py-4">
              <div className="sticky top-0 bg-white rounded-xl shadow">
                <Separator title={"Following"} />
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">
                {following.map((following, index) => (
                  <div
                    key={index}
                    className={`${index % 2 ? "bg-blue" : "bg-pink"
                      } flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r hover:from-[#80d8ff] hover:to-[#ea80fc] rounded-xl hover:cursor-pointer`}
                  >
                    <img className="w-16 h-16 rounded-full" src={following.img} alt={`${following.username}`} />
                    <div className="flex flex-col">
                      <div className="text-grey">{`@${following.username}`}</div>
                      <div className="text-grey text-sm font-normal">{following.firstName + " " + following.lastName}</div>
                    </div>
                  </div>
                ))}
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
};

export default Following;
