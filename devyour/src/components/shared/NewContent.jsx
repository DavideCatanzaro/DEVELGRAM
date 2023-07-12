import { useState } from "react";
import ButtonSend from "../atoms/ButtonSend"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../store/postsSlice";

const NewContent = ({ createPost }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate();

    const [form, setForm] = useState({
        description: "",
    });

    const handleInput = (event) => {
        setForm((_form) => ({
            ..._form,
            [event.target.name]: event.target.value,
        }));
    };

    
    const handleSubmitPost = async (event) => {
        event.preventDefault();
        try {
            const results = await axios({
                url: "http://localhost:6700/api/posts",
                method: "POST",
                data: {
                    ...form,
                },
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            const data = results.data
            dispatch(addPosts(data));
            navigate("/devyour");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="fixed top-0 h-screen w-full z-30 flex justify-center items-center bg-black/75">
                <div className="absolute top-10 items-center justify-center w-2/3 md:w-1/2">
                    <div className="flex flex-col flex-grow gap-2 bg-white shadow rounded-lg p-4">
                        <div className="flex justify-end flex-grow bg-white">
                            <svg onClick={createPost} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className="flex ">
                            <div className="rounded-full">
                                <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" src={user.image} alt={user.username} />
                            </div>
                            <div className="flex justify-start items-center grow mb-2 ml-4 mt-1">
                                <div className="text-grey text-md font-semibold flex grow">{user.username}</div>
                                <div className="text-grey font-thin text-xs"></div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmitPost} className="p-2">
                            <div className="relative mt-2 w-full">
                                <input
                                    className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                                    id="description"
                                    name="description"
                                    type="text"
                                    placeholder=""
                                    value={form.description}
                                    onChange={handleInput}
                                />
                                <label
                                    htmlFor="description"
                                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                >
                                    Type something...
                                </label>
                            </div>

                            <div className="flex justify-between mt-2">
                                <div className="flex gap-2">
                                    <span className="flex items-center transition ease-out duration-300 hover:bg-blue hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                                <ButtonSend type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewContent