import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DevYour from "./pages/Devyour";
import Credits from "./pages/Credits";
import UserProfile from "./pages/UserProfile";
import Notices from "./pages/Notices";
import Messages from "./pages/Messages";
import Follow from "./pages/Follow";
import Suggested from "./pages/Suggested";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/devyour" element={<DevYour/>}/>
        <Route path="/credits" element={<Credits/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path="/notices" element={<Notices/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/follow" element={<Follow/>}/>
        <Route path="/suggested" element={<Suggested/>}/>

      </Routes>
    </>
  );
}

export default App;
