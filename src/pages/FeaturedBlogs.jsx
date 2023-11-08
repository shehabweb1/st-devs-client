import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
	const data = useLoaderData();
	const [posts, setPosts] = useState();

	useEffect(() => {
		const sortedPosts = [...data].sort((a, b) => {
			const wordCountA = a.longDesc ? a.longDesc.length : 0;
			const wordCountB = b.longDesc ? b.longDesc.length : 0;
			return wordCountB - wordCountA;
		});

		setPosts(sortedPosts);
	}, [data]);

	const topPost = posts?.slice(0, 10);

	if (!topPost) {
		return (
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<Skeleton />
			</SkeletonTheme>
		);
	}
	return (
		<div className="py-10">
			<h1 className="text-2xl font-semibold text-center">
				Top 10 Featured Blogs
			</h1>

			<div className="overflow-x-auto mt-5">
				<table className="table table-lg">
					<thead>
						<tr>
							<th>No.</th>
							<th>Blog Title</th>
							<th>Owner</th>
							<th>Owner Photo</th>
						</tr>
					</thead>
					<tbody>
						{topPost?.map((blog, idx) => (
							<tr key={idx}>
								<th>{idx + 1}</th>
								<td>{blog.title}</td>
								<td>{blog.writer.name}</td>
								<td>
									<img
										src={blog.writer.photo}
										alt={blog.writer.name}
										className="w-16 h-16 rounded-full"
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FeaturedBlogs;
