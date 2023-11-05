import Details from "../components/Details";
import Related from "../components/Related";

const BlogDetails = () => {
	return (
		<div className="flex flex-col md:flex-row gap-4 py-10">
			<Details />
			<Related />
		</div>
	);
};

export default BlogDetails;
