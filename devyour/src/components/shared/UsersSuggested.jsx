import { Link } from "react-router-dom";
import ButtonFollow from "../atoms/ButtonFollow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsers } from "../../store/usersSlice";

const UsersSuggested = () => {
	const user = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.items);

	useEffect(() => {
		const fetchDataUsers = async () => {
			try {
				const results = await axios({
					url: "http://localhost:6700/api/users",
					method: "GET",
				});

				const data = results.data;
				dispatch(setUsers(data));
			} catch (err) {
				console.error(err);
			}
		};
		if (users.length === 0) {
			fetchDataUsers();
		}
	}, [users]);

	return (
		<>
			<div className="flex flex-col basis-1/6 w-full mt-4 bg-white text-grey rounded-lg shadow dark:bg-grey">
				<div className="flex items-center justify-between p-3">
					<h5 className="text-md font-bold leading-none text-grey dark:text-white">
						Suggested
					</h5>
					<Link to="/suggested">
						<div className="text-sm font-medium text-blue hover:text-pink duration-300">
							Show all
						</div>
					</Link>
				</div>

				<div className="">
					<div className="divide-y divide-blue dark:divide-pink">
						{
							users.filter((follower) => follower._id !== user.user._id).map((user, index) => {
								return (
									<div key={`user-${index}`} className="py-3 px-3">
										<div className="flex items-center space-x-4">
											<div className="flex-shrink-0">
												<img className="w-8 h-8 rounded-full" src={user.image} alt={user.username} />
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray truncate dark:text-white">
													@{user.username}
												</p>
											</div>
											<div className="flex justify-center items-center">
												<ButtonFollow value="+" />
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default UsersSuggested;
