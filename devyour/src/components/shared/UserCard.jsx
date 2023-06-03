import { Link } from "react-router-dom"

const UserCard = () => {
    return (
        <>
            <Link to="/userProfile">
                <div className="flex flex-col justify-center items-center w-full shadow rounded-xl">
                    <div className="w-full relative flex flex-col items-center rounded-[20px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                            <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
                            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                                <img className="h-full w-full rounded-full" src='./assets/profile-img/Andrea-profile.jpg' alt="" />
                            </div>
                        </div>
                        <div className="mt-16 flex flex-col items-center">
                            <h4 className="flex flex-col justify-center items-center text-xl font-bold text-grey dark:text-white">
                                <span>Andrea Angelo</span>
                                <span>D'Onorio De Meo</span>
                            </h4>
                            <p className="text-base font-normal text-grey dark:text-white">@andgelorea</p>
                        </div>
                        <div className="mt-6 mb-3 flex gap-6">
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-grey dark:text-white">838</p>
                                <p className="text-sm font-normal text-grey dark:text-white">Posts</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-grey dark:text-white">8.3K</p>
                                <p className="text-sm font-normal text-grey dark:text-white">Followers</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-grey dark:text-white">838</p>
                                <p className="text-sm font-normal text-grey dark:text-white">Following</p>
                            </div>
                        </div>
                        <div>
                            <span class="absolute inset-x-0 bottom-0 rounded-b-[20px] h-3 bg-gradient-to-r from-[#80d8ff] to-[#ea80fc]"></span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default UserCard