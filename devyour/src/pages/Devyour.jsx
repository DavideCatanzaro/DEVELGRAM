import LeftSidebar from "../components/shared/LeftSidebar";


function DevYour(){
return(
    <div>
    {/* component */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="./css/tailwind.css" />
    {/* <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.4/dist/tailwind.min.css"> */}
    <style dangerouslySetInnerHTML={{__html: "\n\n    .hover-image-1{\n        transition: ease-in-out 0.2s;\n    }\n    .hover-image-1:hover{\n        width: 50px;\n        height: 50px;\n    }\n\n" }} />
    <div className="flex h-screen  dark:bg-gray-900" >
      {/* Desktop sidebar */}
      <aside className="z-20 hidden w-80 overflow-y-auto  md:block flex-shrink-0">
       <LeftSidebar/>
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
          </div></header>
        <main className="h-full pb-16 overflow-y-auto">
          {/* Remove everything INSIDE this div to a really blank page */}
          {/* Main Contents */}
          <div className="block md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 ">
            {/* parte maurilio e pietro */}
            <div className="hidden md:block lg:block py-8  sticky top-6">
              {/* parte andrea */}
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
     

)
}

export default DevYour;