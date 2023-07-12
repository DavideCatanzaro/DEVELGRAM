import NewContent from "../components/shared/NewContent";
import UsersSuggested from "../components/shared/UsersSuggested";
import Shoots from "../components/shared/Shoots";
import Post from "../components/shared/Post";
import SearchModal from "../components/shared/SearchModal";
import ProfileCard from "../components/shared/ProfileCard";
import Navbar from "../components/shared/Navbar";
import { useEffect, useState } from "react";
import ViewShoot from "../components/shared/ViewShoot";
import { setPosts } from "../store/postsSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const DevYour = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.items);
	const token = useSelector(state => state.auth.token)

	useEffect(() => {
		const fetchDataPosts = async () => {
			try {
				const results = await axios({
					url: "http://localhost:6700/api/posts",
					method: "GET",
					headers: {
						"Authorization": `Bearer ${token}`,
					}
				});

				const data = results.data;
				dispatch(setPosts(data));
				// console.log(data);
			} catch (err) {
				console.error(err);
			}
		};
		if (posts.length === 0) {
			fetchDataPosts();
		}
	}, [posts]);

	const [newPost, setNewPost] = useState(false)
	const [showSearchModal, setShowSearchModal] = useState(false)

	const handleCreatePost = () => {
		if (newPost === false) {
			setNewPost(true)
		} else {
			setNewPost(false)
		}
	}

	const [viewShoot, setViewShoot] = useState(false)

	const handleClickShoot = () => {
		if (viewShoot === false) {
			setViewShoot(true)
		} else {
			setViewShoot(false)
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
			{viewShoot &&
				<ViewShoot viewShoot={handleClickShoot} />
			}
			<div className="flex max-w-7xl mx-auto" >
				<main className="flex sm:gap-6 container px-2 mx-auto">
					<Navbar createPost={handleCreatePost} setShowSearchModal={setShowSearchModal} />

					<div className="basis-2/3 grow">
						<div className="sticky top-0 py-4">
							<div className="sticky top-0 bg-white rounded-xl shadow">
								<Shoots viewShoot={handleClickShoot} />
							</div>
						</div>
						<div className="flex flex-col mx-auto">
							<div className="sticky top-0 w-full bg-white rounded-xl shadow">
								<div className="sticky top-0"></div>
							</div>
							{
								posts.map((post, index) => {
									return (<Post
										key={`post-${index}`}
										user={post.user}
										cover={post.cover}
										description={post.description}
									/>)
								})
							}
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

export default DevYour;
