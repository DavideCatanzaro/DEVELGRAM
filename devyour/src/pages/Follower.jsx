import Separator from "../components/atoms/Separator"
import UsersSuggested from "../components/shared/UsersSuggested"
import ProfileCard from "../components/shared/ProfileCard"
import Navbar from "../components/shared/Navbar"

const Follower = () => {
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

                        <div className="w-full">
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">

                                <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                    <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Rebecca Burke" />
                                    <div className="flex flex-col">
                                        <div className="text-grey">Rebecca Burke</div>
                                        <div className="text-grey text-sm font-normal">@username</div>
                                    </div>
                                </div>

                                <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                    <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Connor Bell" />
                                    <div className="flex flex-col">
                                        <div className="text-grey">Connor Bell</div>
                                        <div className="text-grey text-sm font-normal">@username</div>
                                    </div>
                                </div>

                                <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                    <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/men/9.jpg" alt="Lee Fields" />
                                    <div className="flex flex-col">
                                        <div className="text-grey">Lee Fields</div>
                                        <div className="text-grey text-sm font-normal">@username</div>
                                    </div>
                                </div>

                                <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                    <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/22.jpg" alt="Marie Cole" />
                                    <div className="flex flex-col">
                                        <div className="text-grey">Marie Cole</div>
                                        <div className="text-grey text-sm font-normal">@username</div>
                                    </div>
                                </div>

                                <div className="odd:bg-pink even:bg-blue flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r from-[#80d8ff] to-[#ea80fc] rounded-xl hover:cursor-pointer">
                                    <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/43.jpg" alt="Penny Foster" />
                                    <div className="flex flex-col">
                                        <div className="text-grey">Penny Foster</div>
                                        <div className="text-grey text-sm font-normal">@username</div>
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

export default Follower