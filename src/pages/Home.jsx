import Blogs from "../components/Blogs";
import Categories from "../components/Categories";

const Home = () => {
	return (
		<div className="flex flex-col md:flex-row gap-4 py-10">
			<Categories />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

export default Home;
