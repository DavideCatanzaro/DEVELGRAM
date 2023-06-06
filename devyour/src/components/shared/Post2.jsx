import React from "react";
import WriteComment from "./WriteComment";

const Post2 = ({
    imgProfile,
    nameProfile,
    username,
    imgPost,
    likes,
    descriptionPost,
    postDate,
}) => {
    return (
        <>
            <div className="bg-white shadow rounded-lg mb-6">
                <div className="flex flex-row px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full">
                        <img
                            className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                            alt="User avatar"
                            src={imgProfile} />
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                        <div className="text-gray-600 text-sm font-semibold">{nameProfile}</div>
                        <div className="flex w-full mt-1">
                            <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">{username}</div>
                            <div className="text-gray-400 font-thin text-xs">{postDate}</div>
                        </div>
                    </div>
                </div>
                <div className="text-grey font-medium text-sm mb-4 mt-2 mx-3 px-2">
                    <div className="">
                        <div className="overflow-hidden rounded-xl ">
                            <img className="h-full w-full object-cover" src={imgPost} alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-grey text-md mb-4 mt-2 mx-3 px-2">{descriptionPost}</div>
                <div className="mt-3 mx-5 flex w-full text-xs">
                    <div className="flex text-grey rounded-md mb-2 mr-4 items-center">Likes: <div className="ml-1 text-gray-400  text-ms">{likes}</div></div>
                    <div className="flex text-grey font-normal rounded-md mb-2 mr-4 items-center">Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div></div>
                </div>
                <div className="text-black p-4 antialiased flex">
                    <img className="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" alt="" />
                    <div className="bg-white rounded-lg px-4 pt-2 pb-2.5">
                        <div className="flex">
                            <div className="flex grow font-semibold text-sm leading-relaxed">Sara Lauren</div>
                            <div className="flex text-xs  mt-0.5 text-gray-500">14 w</div>
                        </div>
                        <div className="text-xs leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
                
                <div className="flex justify-center items-center w-full p-4 text-grey focus-within:text-grey">
                    <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                    <WriteComment />
                </div>
            </div>
        </>
    );
}

export default Post2
