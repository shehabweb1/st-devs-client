import { Link } from "react-router-dom";
const Related = () => {
	return (
		<div className="w-2/3 mt-10">
			<h3 className="text-xl font-semibold mb-3">Related Post</h3>
			<hr />
			<div className="flex gap-3 my-3">
				<img
					src="https://businessinspection.com.bd/wp-content/uploads/2023/09/Djuice_Engllish-1024x576.jpg"
					alt=""
					className="w-1/3 h-auto"
				/>
				<Link to="">
					<h4 className="text-lg font-semibold">title</h4>
				</Link>
			</div>
		</div>
	);
};

export default Related;
