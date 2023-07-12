import React, { useState } from "react";

const Comment = ({
	imgProfile,
	username,
	comment,
	date,
}) => {
	const [likesComment, setLikesComment] = useState(0);

	const incrementLikesComment = (e) => {
		e.preventDefault()
		const increment = likesComment + 1;
		setLikesComment(increment)
	};

	return (
		<>
			<div className="text-grey flex pl-4 w-full">
				<img className="rounded-full h-8 w-8 mt-1" src={imgProfile} alt={username} />
				<div className="bg-white rounded-lg px-4 pt-2 pb-2.5 w-full">
					<div className="flex">
						<div className="flex grow font-semibold text-sm leading-relaxed">{username}</div>
						<div className="flex justify-end text-xs mt-0.5 text-gray-500">{date}</div>
					</div>
					<div className="text-xs leading-snug md:leading-normal">{comment}</div>
					<div className="flex w-full text-xs">
						<div className="py-1">
							<div className="flex justify-start items-center gap-1">
								<button onClick={incrementLikesComment}>
									<span>
										<svg className="fill-pink w-4 h-4" viewBox="0 0 24 24">
											<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
										</svg>
									</span>
								</button>
								<span className="text-xs font-bold">{likesComment}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Comment.defaultProps = {
	imgProfile: "https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg",
	username: "User not found",
	comment: "Very good photo, I like it",
	date: "now",
}

export default Comment;