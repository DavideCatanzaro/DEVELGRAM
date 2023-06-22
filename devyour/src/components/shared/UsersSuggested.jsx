import { Link } from "react-router-dom";
import ButtonFollow from "../atoms/ButtonFollow";
import { useState, useEffect } from "react";

const UsersSuggested = () => {
  const [userSuggestedData, setUserSuggestedData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:6700/api/suggested-data");
      const data = await response.json();
      console.log(data);
      setUserSuggestedData(data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col basis-1/6 w-full mt-4 bg-white text-grey rounded-lg shadow dark:bg-grey">
        <div className="flex items-center justify-between p-3">
          <h5 className="text-md font-bold leading-none text-grey dark:text-white">
            Suggested
          </h5>
          <Link to="/suggested">
            <div className="text-sm font-medium text-blue hover:text-pink duration-300">
              Show all
            </div>
          </Link>
        </div>

        <div className="">
          <div className="divide-y divide-blue dark:divide-pink">
            {userSuggestedData.map((suggestedData) => (
              <div className="py-3 px-3">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={suggestedData.img}
                      alt={suggestedData.username}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray truncate dark:text-white">
                      @{suggestedData.username}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <ButtonFollow value="+" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersSuggested;
