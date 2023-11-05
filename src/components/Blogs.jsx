import { Link } from "react-router-dom";
const Blogs = () => {
	return (
		<div className="p-5">
			<img
				src="https://businessinspection.com.bd/wp-content/uploads/2023/09/Djuice_Engllish-1024x576.jpg"
				alt=""
				className="mb-2"
			/>
			<div className="flex flex-col">
				<Link to="/details/1">
					<h3 className="text-xl">Title</h3>
				</Link>
			</div>
		</div>
	);
};

export default Blogs;
