function LikeYourPost(){
    return(
        <>
       <div
            className="mb-3 space-y-4 py-2 focus:outline-none "
            tabindex="0"
          >
            <div className="relative flex items-center">
              <img
                className="h-10 w-10 mb-14 rounded-full object-cover"
                src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg"
                alt=""
              />
              <div className="ml-4 flex flex-col sm:w-96">
                <p className="mb-1 font-medium text-blue">TIZIO 1</p>
                <div className=" flex text-sm text-grey">
                  <span className="shrink-0 mr-1 text-pink">
                    <svg
                      xmlns="http:// www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="inline h-3 w-3"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </span>
                  <span className="mr-1 font-medium text-pink">
                    liked your post:
                  </span>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3y8Eo9yo-VTrjq1pgCyR6PGkaTvNqrjrSZR4omN0UZeuu7jUjZXSKr4RMRteO_kTM3E&usqp=CAU"
                    alt=""
                    className=" h-30 w-20 ml-10  border object-cover"
                  />
                </div>
              </div>
              <span className="absolute top-0 right-2 text-sm text-grey">
                1min ago
              </span>
            </div>
          </div>
        </>
    )
}

export default LikeYourPost;