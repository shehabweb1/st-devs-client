import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Swal from "sweetalert2";
import { UserProviderContext } from "../authProvider/AuthProvider";
import { useParams } from "react-router-dom";

const Comments = () => {
	const { user } = useContext(UserProviderContext);
	const { id } = useParams();

	const { isPending, error, data } = useQuery({
		queryKey: ["comments"],
		queryFn: async () => {
			const res = await fetch(
				"https://newblogs-maves-projects.vercel.app/comments"
			);
			return res.json();
		},
	});

	if (isPending) {
		return (
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<Skeleton />
			</SkeletonTheme>
		);
	}

	if (error) {
		return "An error has occurred: " + error.message;
	}

	const comments = data.filter((comment) => comment.blogId == id);

	const commentDate = moment().format("ll");
	const handleComment = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const message = form.get("message");
		const newComment = {
			blogId: id,
			name: user.displayName,
			photo: user.photoURL,
			message,
			commentDate,
		};
		fetch("https://newblogs-maves-projects.vercel.app/comments", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newComment),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire("Successfully!", "New Comment Added!", "success");
					e.target.message.value = "";
				}
			});
	};

	return (
		<div className="py-10 px-5">
			<h3 className="text-lg font-semibold">This is Comment Area</h3>
			<div className="my-5">
				{comments?.map((comment) => (
					<div className="mb-3 shadow-xl py-3 px-2" key={comment._id}>
						<div className="flex items-center gap-3 mb-2">
							<img
								src={comment?.photo}
								alt="User Photo"
								className="w-14 h-14 rounded-full"
							/>
							<div className="flex flex-col">
								<h5 className="tex-xl font-medium">{comment?.name}</h5>
								<p>Date: Nov 8, 2023</p>
							</div>
						</div>
						<p className="text-lg">{comment?.message}</p>
					</div>
				))}
			</div>
			<div className="w-full">
				<form onSubmit={handleComment}>
					<p className="text-lg py-2">Write Your Comment</p>
					<textarea
						name="message"
						rows="2"
						className="textarea textarea-bordered w-full p-2"
						placeholder="Write your comment here"
					></textarea>
					<button className="btn block ml-auto bg-blue-600 hover:bg-blue-700 font-bold text-white">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Comments;
