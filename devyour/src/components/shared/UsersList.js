const UsersList = () => {
    return (
        <>
            <div className="flex items-center justify-center bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe] h-screen p-6">
                <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
                    <div className="flex flex-col space-y-2 divide-y">
                        {/* <!-- Item --> */}
                        <div className="flex justify-between space-x-6 items-center p-6">
                            <div className="flex items-center space-x-4">
                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-14 w-14" alt="" />
                                    <div className="flex flex-col space-y-2">
                                        <span>Leonard Krashner</span>
                                        <span>@Leonardkrashner</span>
                                    </div>

                            </div>
                            <div>
                                <button className="border rounded-md px-4 py-2">
                                    View
                                </button>
                            </div>
                        </div>
                        {/* <!-- Item --> */}

                        {/* <!-- Item --> */}
                        <div className="flex justify-between space-x-6 items-center p-6">
                            <div className="flex items-center space-x-4">
                                <img src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" className="rounded-full h-14 w-14" alt="" />
                                    <div className="flex flex-col space-y-2">
                                        <span>Flyod Miles</span>
                                        <span>@flyodmiles</span>
                                    </div>
                            </div>
                            <div>
                                <button className="border rounded-md px-4 py-2">
                                    View
                                </button>
                            </div>
                        </div>
                        {/* <!-- Item --> */}

                        {/* <!-- Item --> */}
                        <div className="flex justify-between space-x-6 items-center p-6">
                            <div className="flex items-center space-x-4">
                                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="rounded-full h-14 w-14" alt="" />
                                    <div className="flex flex-col space-y-2">
                                        <span>Emily Selman</span>
                                        <span>@emilyselman</span>
                                    </div>
                            </div>
                            <div>
                                <button className="border rounded-md px-4 py-2">
                                    View
                                </button>
                            </div>
                        </div>
                        {/* <!-- Item --> */}
                    </div>
                    <div className="p-4">
                        <button className="w-full border p-2 rounded-md hover:opacity-60 transition">View all</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersList