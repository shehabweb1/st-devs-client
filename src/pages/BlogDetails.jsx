import { Link, useLoaderData } from "react-router-dom";
import Details from "../components/Details";
import Related from "../components/Related";
import Comments from "../components/Comments";
import { BsArrowLeft } from "react-icons/bs";

const BlogDetails = () => {
	const data = useLoaderData();

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
			<div className="col-span-2 lg:col-span-3">
				<Details data={data} />
				<Comments />
				<Link to="/allBlogs">
					<button className="flex items-center gap-2 bg-blue-600 py-2 px-5 font-bold text-white">
						<BsArrowLeft className="text-xl" /> See All Post
					</button>
				</Link>
			</div>
			<Related data={data} />
		</div>
	);
};

export default BlogDetails;
