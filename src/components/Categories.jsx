import { PropTypes } from "prop-types";

const Categories = ({ categories, handleCategory }) => {
	return (
		<div className="col-span-1 md:col-span-1 lg:col-span-1">
			<h2 className="text-2xl text-center uppercase font-bold mb-3">
				Categories
			</h2>
			<hr />

			<ul className="text-lg pl-5 font-medium uppercase my-5">
				{categories.map((category, idx) => (
					<li className="mb-3" key={idx}>
						<button
							onClick={() => handleCategory(category)}
							className="cursor-pointer hover:text-red-600 transition-all"
						>
							{category}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

Categories.propTypes = {
	categories: PropTypes.array.isRequired,
	handleCategory: PropTypes.func.isRequired,
};

export default Categories;
