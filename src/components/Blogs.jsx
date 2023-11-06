import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const Blogs = ({ blog }) => {
	const { id, image, title, category, short_description } = blog;
	const handleAddWishlist = (id) => {
		console.log(id);
	};
	return (
		<div>
			<img src={image} alt={title} className="mb-2" />
			<div className="flex flex-col justify-around p-2">
				<Link to={`/blogDetails/${id}`}>
					<h3 className="text-xl hover:underline hover:underline-offset-2">
						{title}
					</h3>
				</Link>
				<div className="badge bg-blue-600 text-white my-3">{category}</div>
				<p>{short_description}</p>
				<div className="flex justify-between my-3">
					<Link to={`/blogDetails/${id}`}>
						<button className="btn py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
							Details
						</button>
					</Link>
					<button
						onClick={() => handleAddWishlist(id)}
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
	blog: PropTypes.array.isRequired,
};

export default Blogs;
