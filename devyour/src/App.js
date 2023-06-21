import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Credits from "./pages/Credits";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DevYour from "./pages/Devyour";
import UserProfile from "./pages/UserProfile";
import Notices from "./pages/Notices";
import Messages from "./pages/Messages";
import Follower from "./pages/Follower";
import Following from "./pages/Following";
import Suggested from "./pages/Suggested";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/credits" element={<Credits/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/devyour" element={<DevYour/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path="/notices" element={<Notices/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/follower" element={<Follower/>}/>
        <Route path="/following" element={<Following/>}/>
        <Route path="/suggested" element={<Suggested/>}/>

      </Routes>
    </>
  );
}

export default App;
