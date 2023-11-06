import { Link } from "react-router-dom";
const Blogs = () => {
	return (
		<div>
			<img
				src="https://businessinspection.com.bd/wp-content/uploads/2023/09/Djuice_Engllish-1024x576.jpg"
				alt=""
				className="mb-2"
			/>
			<div className="flex flex-col p-2">
				<Link to="/blogDetails/1">
					<h3 className="text-xl hover:underline hover:underline-offset-2">Title</h3>
				</Link>
			</div>
		</div>
	);
};

export default Blogs;
