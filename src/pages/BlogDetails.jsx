import { useLoaderData } from "react-router-dom";
import Details from "../components/Details";
import Related from "../components/Related";

const BlogDetails = () => {
	const data = useLoaderData();

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
			<div className="col-span-2 lg:col-span-3">
				<Details data={data} />
			</div>
			<Related />
		</div>
	);
};

export default BlogDetails;
