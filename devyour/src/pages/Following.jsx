import Separator from "../components/atoms/Separator";
import UsersSuggested from "../components/shared/UsersSuggested";
import ProfileCard from "../components/shared/ProfileCard";
import Navbar from "../components/shared/Navbar";
import { useState, useEffect } from "react";
import NewContent from '../components/shared/NewContent'
import SearchModal from "../components/shared/SearchModal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsers } from "../store/usersSlice";

const Following = () => {
	const user = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.items);
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		const fetchDataUsers = async () => {
			try {
				const results = await axios({
					url: "http://localhost:6700/api/users",
					method: "GET",
					headers: {
						"Authorization": `Bearer ${token}`,
					}
				});

				const data = results.data;
				dispatch(setUsers(data));
			} catch (err) {
				console.error(err);
			}
		};
		if (users.length === 0) {
			fetchDataUsers();
		}
	}, [users]);

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
						<div className="sticky top-0 py-4">
							<div className="sticky top-0 bg-white rounded-xl shadow">
								<Separator title={"Following"} />
							</div>
						</div>

						<div className="w-full">
							<div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">
								{
									users.filter((follower) => follower._id !== user.user._id)
										.map((follower, index) => (
											<div
												key={index}
												className={`${index % 2 ? "bg-blue" : "bg-pink"} flex gap-3 items-center font-semibold text-grey p-3 hover:bg-gradient-to-r hover:from-[#80d8ff] hover:to-[#ea80fc] rounded-xl hover:cursor-pointer`}
											>
												<img className="w-16 h-16 rounded-full" src={follower.image} alt={`${follower.username}`} />
												<div className="flex flex-col">
													<div className="text-grey">{`@${follower.username}`}</div>
													<div className="text-grey text-sm font-normal">{follower.firstName + " " + follower.lastName}</div>
												</div>
											</div>
										))
								}
							</div>
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
};

export default Following;
