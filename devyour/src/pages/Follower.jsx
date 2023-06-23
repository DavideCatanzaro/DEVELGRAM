import Separator from "../components/atoms/Separator";
import UsersSuggested from "../components/shared/UsersSuggested";
import ProfileCard from "../components/shared/ProfileCard";
import Navbar from "../components/shared/Navbar";
import { useState, useEffect } from "react";

export let data = []

const Follower = () => {
  const [followers, setFollowers] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:6700/api/followers-data");
      data = await response.json();
      setFollowers(data.follower);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex max-w-7xl mx-auto">
        <main className="flex sm:gap-6 container px-2 mx-auto">
          <Navbar />

          <div className="basis-2/3 grow">
            <div className="sticky top-0 py-4">
              <div className="sticky top-0 bg-white rounded-xl shadow">
                <Separator title={"Followers"} />
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">
                {followers.map((follower, index) => (
                  <div
                    key={index}
                    className={`${
                      index % 2 ? "bg-blue" : "bg-pink"
                    } flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r hover:from-[#80d8ff] hover:to-[#ea80fc] rounded-xl hover:cursor-pointer`}
                  >
                    <img className="w-16 h-16 rounded-full" src={follower.img} alt={`${follower.username}`} />
                    <div className="flex flex-col">
                      <div className="text-grey">{`@${follower.username}`}</div>
                      <div className="text-grey text-sm font-normal">{follower.firstName + " " + follower.lastName}</div>
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

export default Follower;
