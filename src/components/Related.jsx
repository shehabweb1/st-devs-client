import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useQuery } from "@tanstack/react-query";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Related = ({ data }) => {
	const {
		isPending,
		error,
		data: allBlogs,
	} = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const res = await fetch("https://newblogs-lovat.vercel.app/blogs");
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

	const relatedBlogs = allBlogs.filter(
		(blog) => blog.category === data.category
	);

	return (
		<div className="w-full mx-auto px-3 mt-10">
			<h3 className="text-xl font-semibold mb-3">Related Post</h3>
			<hr />
			{relatedBlogs.length > 5
				? relatedBlogs.slice(0, 5).map((blog) => (
						<div className="flex gap-3 my-3" key={blog._id}>
							<img src={blog.image} alt={blog.title} className="w-1/3 h-auto" />
							<div>
								<Link to={`/blogDetails/${blog._id}`}>
									<h4 className="text-lg font-semibold">{blog.title}</h4>
								</Link>
								<div className="flex justify-between items-center pt-2">
									<p>{blog.category}</p>
									<p>{blog.postDate}</p>
								</div>
							</div>
						</div>
				  ))
				: relatedBlogs.map((blog) => (
						<div className="flex gap-3 my-3" key={blog._id}>
							<img src={blog.image} alt={blog.title} className="w-1/3 h-auto" />
							<div>
								<Link to={`/blogDetails/${blog._id}`}>
									<h4 className="text-lg font-semibold">{blog.title}</h4>
								</Link>
								<div className="flex justify-between items-center pt-2">
									<p>{blog.category}</p>
									<p>{blog.postDate}</p>
								</div>
							</div>
						</div>
				  ))}
		</div>
	);
};

Related.propTypes = {
	data: PropTypes.object.isRequired,
};
export default Related;
