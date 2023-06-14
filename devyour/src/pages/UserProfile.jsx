import Separator from "../components/atoms/Separator"
import UsersSuggested from "../components/shared/UsersSuggested"
import Post from "../components/shared/Post"
import Post2 from "../components/shared/Post2"
import ProfileCard from "../components/shared/ProfileCard"
import Navbar from "../components/shared/Navbar"

const UserProfile = () => {
    return (
        <>
            <div className="flex max-w-7xl mx-auto">
                <main className="flex gap-6 container px-2 mx-auto">
                <Navbar />

                    <div className="basis-2/3 grow">
                        <div className="sticky top-0 py-4">
                            <div className="sticky top-0 bg-white rounded-xl shadow">
                                <Separator title={"My post"} />
                            </div>
                        </div>
                        <Post
                            imgProfile='./assets/profile-img/Andrea-profile.jpg'
                            nameProfile="Andrea A. D'Onorio De Meo"
                            username="@andgelorea"
                            imgPost="https://picsum.photos/500/250"
                            likes="709"
                            descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            postDate="2 hour ago"
                        />
                        <Post2
                            imgProfile='./assets/profile-img/Andrea-profile.jpg'
                            nameProfile="Andrea A. D'Onorio De Meo"
                            username="@andgelorea"
                            imgPost="https://picsum.photos/500/500"
                            descriptionPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            likes="308"
                            postDate="2 week ago"
                        />

                        <Post
                            imgProfile="./assets/profile-img/Andrea-profile.jpg"
                            nameProfile="Andrea A. D'Onorio De Meo"
                            username="@andgelorea"
                            imgPost="https://picsum.photos/600/600"
                            likes="88"
                            descriptionPost="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                            postDate="3 week ago"
                        />
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