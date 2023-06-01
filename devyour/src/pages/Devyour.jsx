import Post from "../components/shared/Post";
import LeftSidebar from "../components/shared/LeftSidebar";
import NewContent from "../components/shared/NewContent";
import UserCard from "../components/shared/UserCard";
import UsersList from "../components/shared/UsersList";
import Shoots from "../components/shared/Shoots";



function DevYour() {
  return (
    <div className="">
      <div className="flex h-screen dark:bg-gray-900" >
        
        <aside className="z-20 hidden w-52 overflow-y-auto md:block flex-shrink-0">
          <LeftSidebar />
        </aside>

        <div className="flex flex-col max-w-7xl mx-auto flex-1">
      <Shoots />
          <main className="flex grow gap-2 overflow-y-auto px-4">

            <div className="flex flex-col mx-auto">
              <NewContent />
              <Post
                imgProfile="https://randomuser.me/api/portraits/men/9.jpg"
                nameProfile="Pietro Amato"
                imgPost="https://picsum.photos/500/500"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
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

            <aside className="hidden md:block lg:block sticky top-0">
              <div className="hidden md:block lg:block sticky top-0">
                <UserCard />
                <UsersList />
              </div>
            </aside>

          </main>
        </div>
      </div>
    </div>
  );
}

export default DevYour;
