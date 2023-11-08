import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { UserProviderContext } from "../authProvider/AuthProvider";
import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Blogs = ({ blog }) => {
	const { user } = useContext(UserProviderContext);

	const { _id, image, title, category, postDate, shortDesc } = blog;

	const handleAddWishlist = (blog) => {
		const newWishlist = {
			id: blog._id,
			image: blog.image,
			title: blog.title,
			category: blog.category,
			postDate: blog.postDate,
			shortDesc: blog.shortDesc,
			name: user.displayName,
			email: user.email,
			photo: user.photoURL,
		};
		fetch("https://newblogs-lovat.vercel.app/wishlist", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newWishlist),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire(
						"Successfully!",
						"This blog has been added to the Wishlist!",
						"success"
					);
				}
			});
	};
	return (
		<div className="shadow-xl">
			<PhotoProvider>
				<PhotoView src={image}>
					<img src={image} alt={title} className="mb-2 cursor-pointer" />
				</PhotoView>
			</PhotoProvider>

			<div className="flex flex-col items-stretch justify-between p-2">
				<Link to={`/blogDetails/${_id}`}>
					<h3 className="text-2xl font-semibold hover:underline hover:underline-offset-2">
						{title}
					</h3>
				</Link>
				<div className="flex justify-between mt-1">
					<p className="badge badge-info">{category}</p>
					<p>{postDate}</p>
				</div>
				<p className="my-3">{shortDesc}</p>
				<div className="flex justify-between">
					<button onClick={() => handleAddWishlist(blog)}>
						<AiOutlineHeart className="text-4xl text-red-700 " />
					</button>
					<Link to={`/blogDetails/${_id}`}>
						<button className="btn py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
							Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Blogs.propTypes = {
	blog: PropTypes.object.isRequired,
};

export default Blogs;
