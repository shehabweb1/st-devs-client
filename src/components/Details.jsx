import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const Details = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold">Title</h1>
			<div className="flex items-center gap-5 my-3">
				<Link to="/allBlogs/:category">
					<button className="btn btn-primary">Category</button>
				</Link>
				<p className="text-lg font-semibold">4th November 2023</p>
			</div>
			<img
				src="https://businessinspection.com.bd/wp-content/uploads/2023/09/Djuice_Engllish-1024x576.jpg"
				alt=""
				className="w-full h-auto"
			/>
			<div className="my-5">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
					repudiandae quae officiis quod, qui illum exercitationem voluptates
					corrupti, porro facere architecto ipsam similique hic suscipit, sed
					maiores id optio.
				</p>
			</div>
			<Link to="/">
				<button className="flex items-center gap-2 bg-blue-600 py-2 px-5 font-bold text-white">
					<BsArrowLeft className="text-xl" /> See All Post
				</button>
			</Link>
		</div>
	);
};

export default Details;
