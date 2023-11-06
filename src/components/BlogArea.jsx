import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import { PropTypes } from "prop-types";
import Search from "./Search";

const BlogArea = ({ category, data }) => {
	const [blogData, setBlogData] = useState(data);

	useEffect(() => {
		if (category) {
			const categoryData = data.filter((blog) => blog.category === category);
			setBlogData(categoryData);
		}
	}, [category, data]);

	const searchResults = (result) => {
		const titleData = data.filter((blog) =>
			blog.title.toLowerCase().includes(result)
		);
		setBlogData(titleData);
	};
	return (
		<div className="col-span-1 md:col-span-2 lg:col-span-3">
			<Search searchResults={searchResults} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{blogData?.map((blog) => (
					<Blogs key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
};

BlogArea.propTypes = {
	category: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
};

export default BlogArea;
