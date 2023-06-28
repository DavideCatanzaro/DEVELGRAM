import { useState, useEffect } from "react";
import ButtonSend from "../atoms/ButtonSend"
import { useNavigate } from "react-router-dom";

const NewContent = ({ createPost }, imgProfile, postDate) => {
    const savedUser = localStorage.getItem('user');
    const user = savedUser ? JSON.parse(savedUser) : null;

    const [username, setUsername] = useState(user.user.username);
    const [descriptionPost, setDescriptionPost] = useState("")
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    const handleNewContent = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:6700/api/create/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, descriptionPost }),
        });

        const data = await response.text();
        console.log(data);

        navigate("/devyour");
    };

    useEffect(() => {
        setIsFormValid(
            descriptionPost !== ""
        );
    }, [descriptionPost]);

    return (
        <>
            <div className="fixed top-0 h-screen w-full z-30 flex justify-center items-center bg-black/75">
                <div className="absolute top-10 items-center justify-center w-1/2">
                    <form className="flex flex-col flex-grow gap-2 bg-white shadow rounded-lg mb-6 p-4">

                        <div className="flex justify-end flex-grow bg-white">
                            <svg onClick={createPost} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className="flex ">
                            <div className="rounded-full">
                                <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile = user.user.img} />
                            </div>
                            <div className="flex justify-start items-center grow mb-2 ml-4 mt-1">
                                <div className="text-grey text-md font-semibold flex grow">{user.user.username}</div>
                                <div className="text-grey font-thin text-xs">{postDate}</div>
                            </div>
                        </div>

                        <textarea onChange={(e) => setDescriptionPost(e.target.value)} name="message" placeholder="Type something..." className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400">

                        </textarea>

                        <div className="flex justify-between mt-2">
                            <div className="flex gap-2">
                                <span className="flex items-center transition ease-out duration-300 hover:bg-blue hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                    </svg>
                                </span>
                            </div>
                            <ButtonSend disabled={!isFormValid} onClick={handleNewContent} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewContent