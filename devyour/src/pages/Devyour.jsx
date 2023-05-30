import InputField from "../components/atoms/InputField";
import Post from "../components/atoms/Post";
import LeftSidebar from "../components/shared/LeftSidebar";
import NewContent from "../components/shared/NewContent";
import UserCard from "../components/shared/UserCard";
import UsersList from "../components/shared/UsersList";



function DevYour() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n\n    .hover-image-1{\n        transition: ease-in-out 0.2s;\n    }\n    .hover-image-1:hover{\n        width: 50px;\n        height: 50px;\n    }\n\n" }} />
      <div className="flex h-screen  dark:bg-gray-900" >
        {/* Desktop sidebar */}
        <aside className="z-20 hidden w-80 overflow-y-auto  md:block flex-shrink-0">
          <LeftSidebar />
        </aside>
        <div className="flex flex-col flex-1">
          <header className="z-10 py-4  shadow-xs ">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
              {/* Mobile hamburger */}
              <button className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">

                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Search input */}
              {/*
    <input type="search" class="block md:hidden lg:hidden w-1/2 py-2 pl-4 px-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-gray-50 focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style="border-radius: 25px" placeholder="Search" autocomplete="off"> */}
              <div className="flex justify-between">
                <ul className="flex items-center flex-shrink-0 space-x-6">
                  {/* Profile menu */}
                  <li className="relative ">
                    <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">

                      <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=203" alt="" aria-hidden="true" />
                    </button>
                  </li>
                  <li className="relative">
                    <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">

                      <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=205" alt="" aria-hidden="true" />
                    </button>
                  </li>
                  <li className="relative">
                    <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">

                      <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=207" alt="" aria-hidden="true" />
                    </button>
                  </li>
                  <li className="relative">
                    <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
                      <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=209" alt="" aria-hidden="true" />
                    </button>
                  </li>
                  <li className="relative">
                    <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
                      <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=2011" alt="" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <main className="flex grow h-full overflow-y-auto">
            {/* Remove everything INSIDE this div to a really blank page */}
            {/* Main Contents */}
            <div className="flex flex-col">
              <NewContent />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Pietro Amato"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Andrea A. D'Onorio De Meo"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Davide Catanzaro"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
              <Post
                imgProfile="https://randomuser.me/api/portraits/women/9.jpg"
                nameProfile="Maurilio Farina"
                imgPost="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                likes="709"
              />
            </div>
             <aside>
              <div className="hidden md:block lg:block py-8 sticky top-6">
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
