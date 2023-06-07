import React from "react";
import WriteComment from "./WriteComment";
import Comments from "./Comments";

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
            <div className="mb-4 p-4 rounded-xl bg-white flex flex-col shadow">
                <div className="flex ">
                    <div className="w-auto h-auto rounded-full">
                        <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
                    </div>
                    <div className="flex flex-col grow mb-2 ml-4 mt-1">
                        <div className="text-grey text-sm font-semibold">{nameProfile}</div>
                        <div className="flex mt-1">
                            <div className="text-grey font-base text-xs grow cursor-pointer">{username}</div>
                            <div className="text-grey font-thin text-xs">{postDate}</div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <img className="h-full w-full object-cover rounded-lg" src={imgPost} alt="" />
                </div>
                <div className="text-grey text-md mb-4 mt-2">{descriptionPost}</div>
                <div className="flex w-full text-xs">
                    <div className="flex text-grey rounded-md mb-2 mr-4 items-center">Likes: <div className="ml-1 text-gray-400  text-ms">{likes}</div></div>
                    <div className="flex text-grey font-normal rounded-md mb-2 mr-4 items-center">Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div></div>
                </div>
                <div className="flex w-full py-2 text-grey focus-within:text-grey">
                    <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                    <WriteComment />
                </div>
                <div className="text-grey flex">
                    <Comments />
                </div>
            </div>
        </>
    );
}

export default Post2
