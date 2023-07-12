import Separator from "../components/atoms/Separator"
import UsersSuggested from "../components/shared/UsersSuggested"
import Post from "../components/shared/Post"
import ProfileCard from "../components/shared/ProfileCard"
import Navbar from "../components/shared/Navbar"
import { useEffect, useState } from "react"
import NewContent from "../components/shared/NewContent"
import SearchModal from "../components/shared/SearchModal"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setPosts } from "../store/postsSlice"

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
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
                        <div className="sticky top-0 py-4">
                            <div className="sticky top-0 bg-white rounded-xl shadow">
                                <Separator title={"My post"} />
                            </div>
                        </div>

                        {posts.filter((post) => post.user._id === user.user._id).map((post, index)=> {
                            return (<Post
                                key={`post-${index}`}
                                user={post.user}
                                cover={post.cover}
                                description={post.description}
                            />)
                        })
                        }

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
    )
}

export default UserProfile