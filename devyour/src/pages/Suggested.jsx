import Navbar from "../components/shared/Navbar";
import Separator from "../components/atoms/Separator";
import UserCard from "../components/shared/UserCard";
import ProfileCard from "../components/shared/ProfileCard";
import { useState } from "react";
import NewContent from "../components/shared/NewContent";
import SearchModal from "../components/shared/SearchModal";
import { useSelector } from "react-redux";

const Suggested = () => {
	const user = useSelector((state) => state.auth);
	const [newPost, setNewPost] = useState(false)
	const [showSearchModal, setShowSearchModal] = useState(false)

	const handleCreatePost = () => {
		if (newPost === false) {
			setNewPost(true)
		} else {
			setNewPost(false)
		};
	};

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
						<div className="z-20 sticky top-0 py-4">
							<div className="sticky top-0 bg-white rounded-xl shadow">
								<Separator title={"Suggested for you"} />
							</div>
						</div>

						<div className="my-4 gap-3 rounded-xl flex flex-wrap">
							<UserCard />
						</div>
					</div>

					<aside className="basis-1/6 hidden md:block">
						<div className="sticky top-4">
							<ProfileCard />
						</div>
					</aside>
				</main>
			</div>
		</>
	);
};

export default Suggested;
