import InputField from "../components/atoms/InputField";
import Post from "../components/shared/Post";
import LeftSidebar from "../components/shared/LeftSidebar";
import NewContent from "../components/shared/NewContent";
import UserCard from "../components/shared/UserCard";
import UsersList from "../components/shared/UsersList";
import Shoots from "../components/shared/Shoots";



function DevYour() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex h-screen  dark:bg-gray-900" >
        {/* Desktop sidebar */}
        
        <div className="flex flex-col flex-1">
        <aside className="z-20 hidden w-80 overflow-y-auto md:block flex-shrink-0">
          <LeftSidebar />
        </aside>
          <main className="flex grow h-full gap-2 overflow-y-auto px-4">

            {/* Main Contents */}
            <div className="flex flex-col mx-auto">
              <Shoots />
              <NewContent />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Pietro Amato"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Andrea A. D'Onorio De Meo"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Davide Catanzaro"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Maurilio Farina"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
            </div>
            <aside className="hidden md:block lg:block sticky top-0">
              <div className="hidden md:block lg:block py-8 sticky top-0 p-4">
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
