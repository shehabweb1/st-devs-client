import { useQuery } from "@tanstack/react-query";
import Categories from "../components/Categories";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BlogArea from "../components/BlogArea";
import { useState } from "react";

const AllBlogs = () => {
	const [category, setCategory] = useState("");

	const { isLoading, data } = useQuery({
		queryKey: ["blog"],
		queryFn: async () => {
			const res = await fetch("./data.json");
			return res.json();
		},
	});

	// const products = data.filter((product) => product.brand === brand);

	const categoriesSet = new Set();

	if (isLoading) {
		return (
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<Skeleton />
			</SkeletonTheme>
		);
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
