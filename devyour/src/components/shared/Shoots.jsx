const Shoots = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: "\n\n    .hover-image-1{\n        transition: ease-in-out 0.2s;\n    }\n    .hover-image-1:hover{\n        width: 50px;\n        height: 50px;\n    }\n\n" }} />
            <div className="container flex items-center justify-between h-full py-4 px-6 mx-auto text-purple-600 dark:text-purple-300">
                <div className="flex justify-between">
                    <ul className="flex items-center flex-shrink-0 space-x-6">
                        {/* Profile menu */}
                        <li className="relative ">
                            <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">

                                <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=203" alt="" aria-hidden="true" />
                            </button>
                        </li>
                        <li className="relative">
                            <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">

                                <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=205" alt="" aria-hidden="true" />
                            </button>
                        </li>
                        <li className="relative">
                            <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">

                                <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=207" alt="" aria-hidden="true" />
                            </button>
                        </li>
                        <li className="relative">
                            <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
                                <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=209" alt="" aria-hidden="true" />
                            </button>
                        </li>
                        <li className="relative">
                            <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
                                <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=2011" alt="" aria-hidden="true" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Shoots;