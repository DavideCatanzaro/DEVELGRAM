const ViewShoot = ({ viewShoot }) => {
    return (
        <>
            <div className="fixed top-0 h-screen w-full z-30 flex justify-center items-center bg-black/75">
                <div className="absolute top-10 items-center justify-center">
                <div className="flex flex-col bg-white/75 shadow rounded-xl mb-6 p-4">
                        <div className="flex justify-end flex-grow bg-white/5">
                            <svg onClick={viewShoot} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <img className="rounded-xl" alt="User avatar" src="https://picsum.photos/400/600?i=203" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewShoot