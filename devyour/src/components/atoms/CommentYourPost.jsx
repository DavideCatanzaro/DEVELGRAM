function CommentYourPost(){
    return(
        <>
         <div
            className="mb-3 space-y-4 py-2 focus:outline-none "
            tabindex="0"
          >
            <div className="relative flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg"
                alt="Simon Lewis"
              />
              <div className="ml-4 flex flex-col sm:w-96">
                <p className="mb-1 font-medium text-pink ">TIZIO 2</p>
                <div className="mb-2 text-sm text-grey">
                  <span className="shrink-0 mr-1 text-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="inline h-3 w-3"
                    >
                      <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                      <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                    </svg>
                  </span>
                  <span className="mr-1 font-medium text-blue">
                     comment your post:
                  </span>
                  <span className="text-grey ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                </div>
                
              </div>
              <span className="absolute top-0 right-2 text-sm text-gray-400">
                1min ago
              </span>
            </div>
          </div>
        </>
    )
}

export default CommentYourPost