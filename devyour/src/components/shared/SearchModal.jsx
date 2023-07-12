import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchModal = ({ setShowSearchModal }) => {
    const [username, setUsername] = useState("")
    const [userList, setUserList] = useState([])
    // const [firstName, setFirstName] =useState("")

    //const fetchUsers = (evt) => {
    //  evt.preventDefault()
    //fetch(`http://localhost:6700/api/users?username=${username}`).then(
    //  (res) => {
    //    console.log(res.body)
    //  setUserList(res.body);
    // }
    //);
    //}

    const fetchUsers = (evt) => {
        evt.preventDefault();
        fetch(`http://localhost:6700/api/users?username=${username}`)
            .then((res) => res.json()) // Ottieni l'oggetto JSON dalla risposta
            .then((data) => {
                // console.log(data);
                setUserList(data);
            })
            .catch((error) => {
                console.error("Errore durante il recupero degli utenti:", error);
            });
    };

    return (
        <>
            <div className="flex fixed top-0 h-screen w-full z-30 justify-center items-center bg-black/75">
                <div className="absolute top-10 items-center justify-center w-1/2">
                    <div className='flex flex-col bg-white rounded-xl p-4'>
                        <div className="flex justify-end bg-white">
                            <svg onClick={() => setShowSearchModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <form className="flex flex-col flex-grow  bg-white shadow rounded-lg mb-6 p-4" onSubmit={fetchUsers}>
                            <input className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0" type="text" name="username" id="input-username" placeholder="Search users..." onChange={event => setUsername(event.target.value)} />
                            <div className="flex justify-end mt-2">
                                <button type="submit" className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue hover:bg-pink text-white shadow-lg">Search</button>
                            </div>
                        </form>

                        {userList === [] ?
                            <div> </div>
                            :
                            <>
                                <div>Users found: {/* {userList.length} */} </div>
                                <div className='flex flex-col w-full'>

                                    {
                                        userList.filter((user) =>
                                        user.username.toLowerCase().includes(username)
                                      ).map((user) => {
                                            return (
                                                <>
                                                    <div className="flex p-4 border-1 border border-blue rounded-xl w-full">
                                                        <img className=" rounded-full flex items-center mr-2 w-10 h-10" src={user.image} alt="imageProfile" />
                                                        <Link to={`/userProfile/${user.id}`} className="flex items-center" >{user.username}</Link>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchModal;