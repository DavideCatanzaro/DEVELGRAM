import Post from "../components/shared/Post";
import NewContent from "../components/shared/NewContent";
import UsersSuggested from "../components/shared/UsersSuggested";
import Shoots from "../components/shared/Shoots";
import Post2 from "../components/shared/Post2";
import SearchModal from "../components/shared/SearchModal";
import ProfileCard from "../components/shared/ProfileCard";
import Navbar from "../components/shared/Navbar";
import { useEffect, useState } from "react";

function DevYour() {

  const [posts, setPosts] = useState([]);
  
  async function fetchPosts() {
    try {
      const response = await fetch("http://localhost:6700/api/posts");
      const postData = await response.json()
      console.log(postData)
      setPosts(postData);
    
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
     fetchPosts()
  }, []);

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
      {newPost && <div className="fixed top-0 h-screen w-full z-30 flex justify-center items-center bg-black/75">
              <div className="absolute top-10 items-center justify-center w-1/2">
                <NewContent createPost={handleCreatePost}/>
              </div>
            </div>}
      {
        showSearchModal &&
        <SearchModal setShowSearchModal={setShowSearchModal}/>
      }
      <div className="flex max-w-7xl mx-auto">
        <main className="flex gap-6 container px-2 mx-auto">
          <Navbar createPost={handleCreatePost} setShowSearchModal={setShowSearchModal} />

          <div className="basis-2/3 grow">
            <div className="sticky top-0 py-4">
              <div className="sticky top-0 bg-white rounded-xl shadow">
                <Shoots />
              </div>
            </div>
            <div className="flex flex-col mx-auto">
              <div className="sticky top-0 w-full bg-white rounded-xl shadow">
                <div className="sticky top-0"></div>
              </div>
              {posts.map((item) => {
                return ( <Post2
                imgProfile={item.imgProfile}
                nameProfile={item.nameProfile}
                imgPost={item.imgPost}
                descriptionPost={item.descriptionPost}
              />)
              })}
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
