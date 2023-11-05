const Categories = () => {
	return (
		<div className="w-full px-3 md:w-2/3">
			<h2 className="text-2xl uppercase font-bold mb-3">Categories</h2>
			<hr />

			<ul className="text-lg font-medium uppercase my-5">
				<li className="cursor-pointer mb-3 hover:text-red-600 transition-all">
					html
				</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>React js</li>
				<li>Next js</li>
				<li>Node js</li>
				<li>Express js</li>
				<li>MongoDB</li>
			</ul>
		</div>
	);
};

export default Categories;
