import SectionHeader from "./SectionHeader";
import Blogs from "./Blogs";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";

const RecentBlog = () => {
	const { isPending, error, data } = useQuery({
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

	const recentBlogs = data.slice(0, 6);
	return (
		<div className="py-10">
			<SectionHeader title="Recent Posts" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
				{recentBlogs.map((blog) => (
					<Blogs blog={blog} key={blog._id} />
				))}
			</div>
		</div>
	);
};

export default RecentBlog;
