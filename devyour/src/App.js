import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DevYour from "./pages/Devyour";
import Credits from "./pages/Credits";
import UserProfile from "./pages/UserProfile";
import UserCard from "./components/shared/UserCard";
import UsersList from "./components/shared/UsersList";
import Notifiche from "./pages/Notifiche";
import Messaggi from "./pages/Messaggi";


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
        <Route path="/usersList" element={<UsersList/>}/>
        <Route path="notifiche" element={<Notifiche/>}/>
        <Route path="messaggi" element={<Messaggi/>}/>

      </Routes>
    </>
  );
}

export default App;
