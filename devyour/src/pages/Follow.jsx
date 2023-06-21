import React, { useEffect, useState } from "react";

const Follow = () => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/api/followers-data");
      const data = await response.json();
      console.log(data);
      setFollowers(data.follower);
      setFollowing(data.following);
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
        <main className="flex gap-6 container px-2 mx-auto">
          <div className="basis-2/3 grow">
            {/* Follower */}
            <div className="flex flex-col my-4 gap-4 bg-white justify-center items-center rounded-xl">
              <div className="w-full mx-5">
                <div className="flex flex-col bg-white shadow rounded w-full p-5 gap-3">
                  {followers.map((follower, index) => (
                    <div
                      key={index}
                      className={`odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer`}
                    >
                      <img
                        className="w-16 h-16 rounded-full"
                        src={follower.imgProfile}
                        alt={`${follower.username}`}
                      />
                      <div className="flex flex-col">
                        <div>{follower.username}</div>
                        <div className="text-gray-400 text-sm font-normal">
                          {follower.number}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Following */}
            <div className="flex flex-col my-4 gap-4 bg-white justify-center items-center rounded-xl">
              <div className="w-full mx-5">
                <div className="flex flex-col bg-white shadow rounded w-full p-5 gap-3">
                  {following.map((follower, index) => (
                    <div
                      key={index}
                      className={`odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer`}
                    >
                      <img
                        className="w-16 h-16 rounded-full"
                        src={follower.imgProfile}
                        alt={`${follower.username}`}
                      />
                      <div className="flex flex-col">
                        <div>{follower.username}</div>
                        <div className="text-gray-400 text-sm font-normal">
                          {follower.number}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Follow;
