import { Link } from "react-router-dom"
import ButtonFollow from "../atoms/ButtonFollow"

const UsersSuggested = () => {
    return (
        <>
            <div className="flex flex-col basis-1/6 w-full mt-4 bg-white text-grey rounded-lg shadow dark:bg-grey">
                <div className="flex items-center justify-between p-3">
                    <h5 className="text-md font-bold leading-none text-grey dark:text-white">Suggested</h5>
                    <Link to="/suggested">
                        <div className="text-sm font-medium text-blue hover:text-pink duration-300">Show all</div>
                    </Link>
                </div>
                <div className="">
                    <div className="divide-y divide-blue dark:divide-pink">
                        <div className="py-3 px-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src='./assets/profile-img/Untitled.png' alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray truncate dark:text-white">
                                        Monkey D. Luffy
                                    </p>
                                    <p className="text-sm text-grey truncate dark:text-white">
                                        @mugiwara
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <ButtonFollow value="+"/>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 px-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src='./assets/profile-img/images.jpg' alt="Bonnie image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Zoro Roronoa
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        @kaizoku_hanta
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <ButtonFollow value="+"/>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 px-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src='./assets/profile-img/Untitled.png' alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray truncate dark:text-white">
                                        Monkey D. Luffy
                                    </p>
                                    <p className="text-sm text-grey truncate dark:text-white">
                                        @mugiwara
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <ButtonFollow value="+"/>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 px-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src='./assets/profile-img/images.jpg' alt="Bonnie image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Zoro Roronoa
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        @kaizoku_hanta
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <ButtonFollow value="+"/>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 px-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src='./assets/profile-img/images.jpg' alt="Bonnie image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Zoro Roronoa
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        @kaizoku_hanta
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <ButtonFollow value="+"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersSuggested