import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
const Details = ({ data }) => {
	const { _id, image, title, category, shortDesc, longDesc, postDate } = data;
	return (
		<div>
			<h1 className="text-3xl font-bold">{title}</h1>
			<div className="flex items-center justify-between my-3">
				<div className="flex items-center gap-5">
					<p className="badge bg-blue-600 text-white my-3">{category}</p>
					<p className="text-lg font-semibold">{postDate}</p>
				</div>
				<Link to={`/UpdateBlog/${_id}`}>
					<button className="btn py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
						Update Now
					</button>
				</Link>
			</div>
			<img src={image} alt={title} className="w-full h-auto md:" />
			<div className="my-5">
				<p className="text-lg font-medium py-3">{shortDesc}</p>
				<p>{longDesc}</p>
			</div>
			<Link to="/allBlogs">
				<button className="flex items-center gap-2 bg-blue-600 py-2 px-5 font-bold text-white">
					<BsArrowLeft className="text-xl" /> See All Post
				</button>
			</Link>
		</div>
	);
};

Details.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Details;
