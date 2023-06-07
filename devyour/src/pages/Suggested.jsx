import UserCard from "../components/shared/UserCard"
import Separator from "../components/atoms/Separator"
import UsersSuggested from "../components/shared/UsersSuggested"
import LeftSidebar from "../components/shared/LeftSidebar"
import ButtonFollow from "../components/atoms/ButtonFollow"
import ProfileCard from "../components/shared/ProfileCard"
import SecondSidebar from "../components/shared/SecondSidebar"

const Suggested = () => {
    return (
        <>
            <div className="flex max-w-7xl mx-auto">

                <main className="flex gap-6 container px-2 mx-auto">
                    <SecondSidebar />
                    <aside className="hidden basis-1/6 md:block ">
                        <div className="sticky top-0 h-screen">
                            <LeftSidebar />
                        </div>
                    </aside>

                    <div className="basis-2/3 grow">
                        <div className="sticky top-0 py-4">
                            <div className="sticky top-0 bg-white rounded-xl shadow">
                                <Separator title={"Suggested for you"} />
                            </div>
                        </div>

                        <div className="basis-2/3 my-4 gap-4 rounded-xl flex flex-wrap mx-auto ">
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard firstName={"Ciro"} />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                            <div className="basis-1/4 rounded-xl bg-white flex flex-wrap mx-auto shadow">
                                <UserCard />
                            </div>
                        </div>
                    </div>

                    <aside className="basis-1/6 hidden md:block">
                        <div className="sticky top-4">
                            <ProfileCard />
                        </div>
                    </aside>
                </main>
            </div>
        </>
    )
}

export default Suggested