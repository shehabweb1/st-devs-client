import { useQuery } from "@tanstack/react-query";
import Categories from "../components/Categories";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BlogArea from "../components/BlogArea";
import { useState } from "react";

const AllBlogs = () => {
	const [category, setCategory] = useState("");

	const { isPending, error, data } = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const res = await fetch(
				"https://newblogs-maves-projects.vercel.app/blogs"
			);
			return res.json();
		},
	});

	const categoriesSet = new Set();

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

	if (data) {
		data.forEach((blog) => {
			categoriesSet.add(blog.category);
		});
	}

	const categories = Array.from(categoriesSet);

	const handleCategory = (category) => {
		setCategory(category);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
			<Categories categories={categories} handleCategory={handleCategory} />
			{data ? <BlogArea data={data} category={category} /> : null}
		</div>
	);
};

export default AllBlogs;
