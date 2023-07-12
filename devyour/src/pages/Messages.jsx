import React, { useState } from "react";
import InputField from "../components/atoms/InputField";
import ProfileCard from "../components/shared/ProfileCard";
import UsersSuggested from "../components/shared/UsersSuggested";
import Navbar from "../components/shared/Navbar";
import ButtonSend from "../components/atoms/ButtonSend";
import NewContent from "../components/shared/NewContent";
import SearchModal from "../components/shared/SearchModal";

const Messages = ({
	imgProfile,
	username,
	lastMessage,
	date,
}) => {
	const [newPost, setNewPost] = useState(false)
	const [showSearchModal, setShowSearchModal] = useState(false)

	const handleCreatePost = () => {
		if (newPost === false) {
			setNewPost(true)
		} else {
			setNewPost(false)
		}
	}

	return (
		<>
			{
				newPost &&
				<NewContent createPost={handleCreatePost} />
			}
			{
				showSearchModal &&
				<SearchModal setShowSearchModal={setShowSearchModal} />
			}
			<div className="flex max-w-7xl mx-auto">
				<main className="flex sm:gap-6 container px-2 mx-auto">
					<Navbar createPost={handleCreatePost} setShowSearchModal={setShowSearchModal} />
					<div className="basis-2/3 grow">
						<div className="sticky top-4 flex flex-row justify-between bg-white shadow rounded-xl h-screen ">

							<div className="basis-1/3 w-full flex flex-col overflow-auto">
								<div className="border-r border-blue py-4 px-2 ">
									<InputField
										type="text"
										placeholder="search chatting"
										input="primaryInputVariant"
									/>
								</div>

								<div className="flex flex-col justify-start items-center border-r border-blue h-full">

									<div className="flex p-4 items-center w-full">
										<div className="w-auto h-auto rounded-full">
											<img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
										</div>
										<div className="flex flex-col grow mb-2 ml-4 mt-1">
											<div className="text-grey text-sm font-semibold">pieamt</div>
											<div className="flex mt-1">
												<div className="text-grey font-base text-xs grow cursor-pointer">Certo</div>
												{/* <div className="text-grey font-thin text-xs">{date}</div> */}
											</div>
										</div>
									</div>

									<div className="flex p-4 items-center w-full">
										<div className="w-auto h-auto rounded-full">
											<img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
										</div>
										<div className="flex flex-col grow mb-2 ml-4 mt-1">
											<div className="text-grey text-sm font-semibold">dadocata</div>
											<div className="flex mt-1">
												<div className="text-grey font-base text-xs grow cursor-pointer">Ci vediamo</div>
												{/* <div className="text-grey font-thin text-xs">{date}</div> */}
											</div>
										</div>
									</div>

									<div className="flex p-4 items-center w-full">
										<div className="w-auto h-auto rounded-full">
											<img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
										</div>
										<div className="flex flex-col grow mb-2 ml-4 mt-1">
											<div className="text-grey text-sm font-semibold">lucone00</div>
											<div className="flex mt-1">
												<div className="text-grey font-base text-xs grow cursor-pointer">Buona giornata</div>
												{/* <div className="text-grey font-thin text-xs">{date}</div> */}
											</div>
										</div>
									</div>

									<div className="flex p-4 items-center w-full">
										<div className="w-auto h-auto rounded-full">
											<img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
										</div>
										<div className="flex flex-col grow mb-2 ml-4 mt-1">
											<div className="text-grey text-sm font-semibold">mauri00</div>
											<div className="flex mt-1">
												<div className="text-grey font-base text-xs grow cursor-pointer">A domani</div>
												{/* <div className="text-grey font-thin text-xs">{date}</div> */}
											</div>
										</div>
									</div>

								</div>
							</div>

							{/* chatconversation */}
							<div className="basis-2/3 w-full px-5 flex flex-col overflow-auto justify-between">
								<div>
									<div className="flex p-4 items-center w-full">
										<div className="w-auto h-auto rounded-full">
											<img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" 
											src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg" />
										</div>
										<div className="flex flex-col grow mb-2 ml-4 mt-1">
											<div className="text-grey text-sm font-semibold">pieamt</div>
											{/* <div className="flex mt-1">
												<div className="text-grey font-base text-xs grow cursor-pointer">{lastMessage}</div>
												<div className="text-grey font-thin text-xs">{date}</div>
											</div> */}
										</div>
									</div>
								</div>
								<hr />

								<div className="flex grow overflow-auto">
									<div className="flex flex-col justify-end w-full mt-5">
										<div className="flex justify-end mb-4">
											<div className="mr-2 py-3 px-4 bg-blue rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
												Ciao Pie
											</div>
											<img src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg" className="object-cover h-8 w-8 rounded-full" alt="" />
										</div>
										<div className="flex justify-start mb-4">
											<img src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg" className="object-cover h-8 w-8 rounded-full" alt="" />
											<div className="ml-2 py-3 px-4 bg-pink rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
												Ciao Andre
											</div>
										</div>
										<div className="flex justify-end mb-4">
											<div>
												<div className="mr-2 py-3 px-4 bg-blue rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
													Ci vediamo domani alla presentazione
												</div>
											</div>
											<img
												src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg"
												className="object-cover h-8 w-8 rounded-full"
												alt=""
											/>
										</div>
										<div className="flex justify-start mb-4">
											<img
												src="https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg"
												className="object-cover h-8 w-8 rounded-full"
												alt=""
											/>
											<div className="ml-2 py-3 px-4 bg-pink rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
												Certo
											</div>
										</div>
									</div>
								</div>

								<div >
									<div className="py-5 flex gap-2">
										<InputField
											type="text"
											placeholder="type your message here..."
											input="primaryInputVariant"
										/>
										<ButtonSend />
									</div>
								</div>
							</div>

							{/* 
              Banner pubblicitario laterale 
              <div className="w-2/5 border-y border-x rounded-r-lg px-5">
                <div className="flex flex-col">
                  <div className="font-semibold text-xl py-4">Mern Stack Group</div>
                  <img
                    src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                    className="object-cover rounded-xl h-64"
                    alt=""
                  />
                  <div className="font-semibold py-4">Created 22 Sep 2021</div>
                  <div className="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                    perspiciatis!
                  </div>
                </div>
              </div> */}

						</div>
					</div>

					<aside className="basis-1/6 hidden md:block">
						<div className="sticky top-4">
							<ProfileCard />
							<UsersSuggested />
						</div>
					</aside>
				</main>
			</div>
		</>
	);
}

Messages.defaultProps = {
	imgProfile: "https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg",
	username: "User not found",
	lastMessage: "Message not found",
	date: "now"
}

export default Messages;
