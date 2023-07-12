import React from "react";
import ButtonSend from "../atoms/ButtonSend";
import { useSelector } from "react-redux";

const WriteComment = () => {
	const user = useSelector((state) => state.auth);

	return (
		<>
			<div className="flex w-full py-2 text-grey focus-within:text-grey">
				<img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" src={user.user.image} alt={user.user.username} />

				<form className="flex grow">
					<input
						type="text"
						id="text"
						placeholder="Write a comment..."
						className="border-1 peer block w-full rounded-lg border border-blue bg-transparent px-2 text-sm text-grey focus:border-pink focus:outline-none focus:ring-0"
					/>
					<span className="flex justify-center items-center">
						<ButtonSend />
					</span>
				</form>
			</div>
		</>
	);
};

export default WriteComment;