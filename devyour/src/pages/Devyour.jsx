import UserCard from "../components/shared/UserCard";
import UsersList from "../components/shared/UsersList";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

function DevYour() {
    return (
        <>
            <nav className="flex justify-between">
                <Link to="/userCard">User Card</Link>
                <Link to="/userProfile">User Profile</Link>
                <Link to="/usersList">Users List</Link>
            </nav>
        </>
    )
}

export default DevYour;