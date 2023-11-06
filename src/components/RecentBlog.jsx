import SectionHeader from "./SectionHeader";
import Blogs from "./Blogs";

const RecentBlog = () => {
	return (
		<div className="py-10">
			<SectionHeader title="Recent Posts" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
				<Blogs />
			</div>
		</div>
	);
};

export default RecentBlog;
