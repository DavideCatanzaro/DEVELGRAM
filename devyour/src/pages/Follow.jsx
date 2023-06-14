import Separator from "../components/atoms/Separator"
import UsersSuggested from "../components/shared/UsersSuggested"
import ProfileCard from "../components/shared/ProfileCard"
import Navbar from "../components/shared/Navbar"

const Follow = () => {
    return (
        <>
            <div className="flex max-w-7xl mx-auto">
                <main className="flex gap-6 container px-2 mx-auto">
                <Navbar />

                    <div className="basis-2/3 grow">
                        <div className="sticky top-0 py-4">
                            <div className="sticky top-0 bg-white rounded-xl shadow">
                                <Separator title={"Follower"} />
                            </div>
                        </div>

{/* Follower */}
                        <div className="flex flex-col my-4 gap-4 bg-white justify-center items-center rounded-xl">

                            <div className="w-full mx-5">
                                <div className="flex flex-col bg-white shadow rounded w-full p-5 gap-3 ">

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Rebecca Burke" />
                                        <div className="flex flex-col">
                                            <div>Rebecca Burke</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(227)-691-8675</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Connor Bell" />
                                        <div className="flex flex-col">
                                            <div>Connor Bell</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(579)-416-9946</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/men/9.jpg" alt="Lee Fields" />
                                        <div className="flex flex-col">
                                            <div>Lee Fields</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(737)-996-6407</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/22.jpg" alt="Marie Cole" />
                                        <div className="flex flex-col">
                                            <div>Marie Cole</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(924)-106-8494</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/43.jpg" alt="Penny Foster" />
                                        <div className="flex flex-col">
                                            <div>Penny Foster</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(040)-121-3669</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

{/* Following */}
                        <div className="flex flex-col my-4 gap-4 bg-white justify-center items-center rounded-xl">

                            <div className="w-full mx-5">
                                <div className="flex flex-col bg-white shadow rounded w-full p-5 gap-3 ">

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Rebecca Burke" />
                                        <div className="flex flex-col">
                                            <div>Rebecca Burke</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(227)-691-8675</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Connor Bell" />
                                        <div className="flex flex-col">
                                            <div>Connor Bell</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(579)-416-9946</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/men/9.jpg" alt="Lee Fields" />
                                        <div className="flex flex-col">
                                            <div>Lee Fields</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(737)-996-6407</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/22.jpg" alt="Marie Cole" />
                                        <div className="flex flex-col">
                                            <div>Marie Cole</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(924)-106-8494</div>
                                        </div>
                                    </div>

                                    <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                        <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/43.jpg" alt="Penny Foster" />
                                        <div className="flex flex-col">
                                            <div>Penny Foster</div>
                                            <div className="text-gray-400 text-sm font-normal">+1(040)-121-3669</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <aside className="basis-1/6 hidden md:block">
                        <div className="sticky top-4">
                            <ProfileCard />
                            <UsersSuggested />
                        </div>
                    </aside>
                </main>
            </div>
        </>
    )
}

export default Follow