import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const Blogs = ({ blog }) => {
	const { _id, image, title, category, postDate, shortDesc } = blog;
	const handleAddWishlist = (id) => {
		console.log(id);
	};
	return (
		<div className="shadow-xl">
			<img src={image} alt={title} className="mb-2" />
			<div className="flex flex-col justify-around p-2">
				<Link to={`/blogDetails/${_id}`}>
					<h3 className="text-xl hover:underline hover:underline-offset-2">
						{title}
					</h3>
				</Link>
				<div className="flex justify-between">
					<p className="badge bg-blue-600 text-white my-3">{category}</p>
					<p>{postDate}</p>
				</div>
				<p className="my-3">{shortDesc}</p>
				<div className="flex justify-between">
					<Link to={`/blogDetails/${_id}`}>
						<button className="btn py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
							Details
						</button>
					</Link>
					<button
						onClick={() => handleAddWishlist(_id)}
						className="btn py-1 px-3 text-white bg-blue-600 hover:bg-blue-700"
					>
						Wishlist
					</button>
				</div>
			</div>
		</div>
	);
};

Blogs.propTypes = {
	blog: PropTypes.object.isRequired,
};

export default Blogs;
