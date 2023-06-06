import Post from "../components/shared/Post";
import LeftSidebar from "../components/shared/LeftSidebar";
import NewContent from "../components/shared/NewContent";
import UserCard from "../components/shared/UserCard";
import UsersSuggested from "../components/shared/UsersSuggested";
import Shoots from "../components/shared/Shoots";
import Post2 from "../components/shared/Post2";

function DevYour() {
  return (
    <>
      <div className="flex max-w-7xl mx-auto">

        <main className="flex gap-6 container px-2 mx-auto">

          <aside className="basis-1/6  md:block">
            <div className="h-screen sticky top-0">
              <LeftSidebar />
            </div>
          </aside>

          <div className="basis-2/3 grow">
            <div className="sticky top-0 py-4">
              <div className="sticky top-0 bg-white rounded-xl shadow">
                <Shoots />
              </div>
            </div>
            <div className="flex flex-col mx-auto">

              <div className="sticky top-0 w-full bg-white rounded-xl shadow">
                <div className="sticky top-0">

                </div>
              </div>

              <NewContent />
              <Post
                imgProfile="https://randomuser.me/api/portraits/men/9.jpg"
                nameProfile="Pietro Amato"
                imgPost="https://picsum.photos/500/500"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post2
                imgProfile='./assets/profile-img/Andrea-profile.jpg'
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
              <UserCard />
              <UsersSuggested />
            </div>
          </aside>
        </main>

      </div>
    </>
  );
}

export default DevYour;
