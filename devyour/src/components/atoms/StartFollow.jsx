function StartFollow() {
    return(
        <>
        <div
            className="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1 focus:ring-grey"
            tabindex="0"
          >
            <div className="relative flex items-center">
              <img
                className="h-10 w-10  rounded-full object-cover"
                src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg"
                alt=""
              />
              <div className="ml-4 flex flex-col sm:w-96">
                <p className="mb-1 font-medium text-grey">TIZIO 3</p> 
                <span className="text-grey">Started follow you</span>
              </div>
              <span className="absolute top-0 right-2 text-sm text-grey">
                1min ago
              </span>
            </div>
          </div>
        </>
    )
}

export default StartFollow