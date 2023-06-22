import { Link } from "react-router-dom";
import ButtonFollow from "../atoms/ButtonFollow";
import { useState, useEffect } from "react";

const UserCard = ({ cover, img, firstName, lastName, username }) => {
  const [userCards, setUserCards] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:6700/api/suggested-data");
      const data = await response.json();
      console.log(data);
      setUserCards(data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {userCards.map((userCard) => (
        <div className="basis-1/4 rounded-xl bg-white flex shadow mx-auto">
          <div className="flex flex-col justify-center items-center w-full shadow rounded-xl">
            <div className="w-full relative flex flex-col items-center rounded-xl mx-auto p-4 bg-white bg-clip-border dark:bg-grey dark:text-white">
              <div className="relative flex h-24 w-full justify-center rounded-xl bg-cover">
                <img
                  src={userCard.cover}
                  className="flex h-24 w-full justify-center rounded-xl bg-cover"
                  alt="User Cover"
                />
                <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-4 border-white hover:border-blue">
                  <Link to="/userProfile">
                    <img
                      className="h-full w-full rounded-full"
                      src={userCard.img}
                      alt={userCard.username}
                    />
                  </Link>
                </div>
              </div>
              <Link to="/userProfile">
                <div className="mt-16 flex flex-col items-center">
                  <h4 className="flex flex-col justify-center items-center text-xl font-bold text-grey dark:text-white">
                    <span>{userCard.firstName}</span>
                    <span>{userCard.lastName}</span>
                  </h4>
                  <p className="text-base font-normal text-grey dark:text-white">
                    @{userCard.username}
                  </p>
                </div>
              </Link>
              <div className="py-3 w-full flex justify-center items-center gap-4">
                <ButtonFollow value="Follow" />
                <ButtonFollow value="Remove" />
              </div>
              <div>
                <span className="absolute inset-x-0 bottom-0 rounded-b-[20px] h-3 bg-gradient-to-r from-[#80d8ff] to-[#ea80fc]"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

UserCard.defaultProps = {
  cover:
    "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png",
  img: "https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg",
  firstName: "Fake",
  lastName: "User",
  username: "undefined",
};

export default UserCard;
