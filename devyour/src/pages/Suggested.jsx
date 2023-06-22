import Navbar from "../components/shared/Navbar";
import Separator from "../components/atoms/Separator";
import UserCard from "../components/shared/UserCard";
import ProfileCard from "../components/shared/ProfileCard";

const Suggested = () => {
  return (
    <>
      <div className="flex max-w-7xl mx-auto">
        <main className="flex md:gap-6 container px-2 mx-auto">
          <Navbar />

          <div className="basis-2/3 grow">
            <div className="z-20 sticky top-0 py-4">
              <div className="sticky top-0 bg-white rounded-xl shadow">
                <Separator title={"Suggested for you"} />
              </div>
            </div>

            <div className="my-4 gap-3 rounded-xl flex flex-wrap">
              <UserCard />
            </div>
          </div>

          <aside className="basis-1/6 hidden md:block">
            <div className="sticky top-4">
              <ProfileCard />
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Suggested;
