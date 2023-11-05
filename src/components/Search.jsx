const Search = () => {
	const handleSearch = (e) => {
		e.preventDefault();
		console.log(e.target.search.value);
	};
	return (
		<form
			onSubmit={handleSearch}
			className="border rounded-full md:w-80 h-8 md:h-10 flex"
		>
			<input
				type="text"
				name="search"
				placeholder="Search…"
				className="outline-none h-full w-full rounded-s-full px-3 bg-transparent"
			/>
			<button className="">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-9 w-auto p-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</form>
	);
};

export default Search;
