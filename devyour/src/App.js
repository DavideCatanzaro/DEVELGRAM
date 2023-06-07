import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DevYour from "./pages/Devyour";
import Credits from "./pages/Credits";
import UserProfile from "./pages/UserProfile";
import UserCard from "./components/shared/UserCard";
import UsersSuggested from "./components/shared/UsersSuggested";
import Notifiche from "./pages/Notifiche";
import Messaggi from "./pages/Messaggi";
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
        <Route path="/userCard" element={<UserCard/>}/>
        <Route path="/usersSuggested" element={<UsersSuggested/>}/>
        <Route path="/notifiche" element={<Notifiche/>}/>
        <Route path="/messaggi" element={<Messaggi/>}/>
        <Route path="/follow" element={<Follow/>}/>
        <Route path="/suggested" element={<Suggested/>}/>

      </Routes>
    </>
  );
}

export default App;
