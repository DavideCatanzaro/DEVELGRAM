const UsersList = () => {
    return (
        <>
            <div className='flex flex-col rounded-[20px] items-center justify-center min-h-screen p-4 bg-slate-200'>
                <div className='user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4'>
                    {/* <!--User row --> */}
                    <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                            <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                                <img className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
                            </div>
                            <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                                <a href="#" className="title font-medium no-underline">@wade_warren</a>
                                <div className="skills flex flex-col">
                                    <span className="subtitle text-slate-500">Wade Warren</span>
                                </div>
                            </div>
                        </div>
                        {/* <!--Button content --> */}
                        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                            <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue hover:bg-pink duration-300" type="button">Follow</button>
                        </div>
                        {/* <!--Close Button content --> */}
                    </div>
                    {/* <!--User row -->

        <!--User row --> */}
                    <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                            <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                                <img className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" />
                            </div>
                            <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                                <a href="#" className="title font-medium no-underline">@loura_weber</a>
                                <div className="skills flex flex-col">
                                    <span className="subtitle text-slate-500">Loura Weber</span>
                                </div>
                            </div>
                        </div>
                        {/* <!--Button content --> */}
                        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                            <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue hover:bg-pink duration-300" type="button">Follow</button>
                        </div>
                        {/* <!--Close Button content --> */}
                    </div>
                    {/* <!--User row -->

        <!--User row --> */}
                    <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                            <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                                <img className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/46.jpg" />
                            </div>
                            <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                                <a href="#" className="title font-medium no-underline">@jane_cooper</a>
                                <div className="skills flex flex-col">
                                    <span className="subtitle text-slate-500">Jane Cooper</span>
                                </div>
                            </div>
                        </div>
                        {/* <!--Button content --> */}
                        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                            <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue hover:bg-pink duration-300" type="button">Follow</button>
                        </div>
                        {/* <!--Close Button content --> */}
                    </div>
                    {/* <!--User row -->

        <!--User row --> */}
                    <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                            <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                                <img className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/47.jpg" />
                            </div>
                            <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                                <a href="#" className="title font-medium no-underline">@guy_hawkins</a>
                                <div className="skills flex flex-col">
                                    <span className="subtitle text-slate-500">Guy Hawkins</span>
                                </div>
                            </div>
                        </div>
                        {/* <!--Button content --> */}
                        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                            <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue hover:bg-pink duration-300" type="button">Follow</button>
                        </div>
                        {/* <!--Close Button content --> */}
                    </div>
                    {/* <!--User row -->

        <!--User row --> */}
                    <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                            <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                                <img className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/women/63.jpg" />
                            </div>
                            <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                                <a href="#" className="title font-medium no-underline">@julian_jill_brown</a>
                                <div className="skills flex flex-col">
                                    <span className="subtitle text-slate-500">Julian Jill Brown</span>
                                </div>
                            </div>
                        </div>
                        {/* <!--Button content --> */}
                        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                            <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue hover:bg-pink duration-300" type="button">Follow</button>
                        </div>
                        {/* <!--Close Button content --> */}
                    </div>
                    {/* <!--User row --> */}

                    <a className="show-more block w-10/12 mx-auto py-2.5 px-4 text-center no-underline rounded text-white border-0 font-medium bg-blue hover:bg-pink duration-300" href="#/">
                        
                    Show more members  
                    </a>
                </div>
            </div>
        </>
    )
}

export default UsersList