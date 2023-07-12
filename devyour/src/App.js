import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
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

const ProtectedRoute = ({children}) => {
	const token = useSelector((state) => state.auth.token);
	if (token === null) {
		return <Navigate to="/login" replace={true}/>
	} 
	return children
};

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/credits" element={<Credits />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/devyour" element={<ProtectedRoute><DevYour /></ProtectedRoute>} />
				<Route path="/userProfile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
				<Route path="/notices" element={<ProtectedRoute><Notices /></ProtectedRoute>} />
				<Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
				<Route path="/follower" element={<ProtectedRoute><Follower /></ProtectedRoute>} />
				<Route path="/following" element={<ProtectedRoute><Following /></ProtectedRoute>} />
				<Route path="/suggested" element={<ProtectedRoute><Suggested /></ProtectedRoute>} />

			</Routes>
		</>
	);
};

export default App;
