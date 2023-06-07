import { Link } from "react-router-dom"

const UserCard = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full shadow rounded-xl">
                <div className="w-full relative flex flex-col items-center rounded-xl mx-auto p-4 bg-white bg-clip-border dark:bg-grey dark:text-white ">
                    <div className="relative flex h-24 w-full justify-center rounded-xl bg-cover" >
                        <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="flex h-24 w-full justify-center rounded-xl bg-cover" />
                        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-4 border-white hover:border-blue">
                            <Link to="/userProfile">
                                <img className="h-full w-full rounded-full" src='./assets/profile-img/Andrea-profile.jpg' alt="" />
                            </Link>
                        </div>
                    </div>
                    <Link to="/userProfile">
                        <div className="mt-16 flex flex-col items-center">
                            <h4 className="flex flex-col justify-center items-center text-xl font-bold text-grey dark:text-white">
                                <span>Andrea Angelo</span>
                                <span>D'Onorio De Meo</span>
                            </h4>
                            <p className="text-base font-normal text-grey dark:text-white">@andgelorea</p>
                        </div>
                    </Link>
                    <div className="py-3 w-full flex justify-center items-center gap-4">
                        <Link to="/userProfile">
                            <div className="basis-1/3 flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-grey dark:text-white">3</p>
                                <p className="text-sm font-normal text-grey dark:text-white">Posts</p>
                            </div>
                        </Link>
                        <Link to="/follow">
                            <div className="basis-1/3 flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-grey dark:text-white">10</p>
                                <p className="text-sm font-normal text-grey dark:text-white">Followers</p>
                            </div>
                        </Link>
                        <Link to="/follow">
                            <div className="basis-1/3 flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-grey dark:text-white">8</p>
                                <p className="text-sm font-normal text-grey dark:text-white">Following</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <span class="absolute inset-x-0 bottom-0 rounded-b-[20px] h-3 bg-gradient-to-r from-[#80d8ff] to-[#ea80fc]"></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserCard