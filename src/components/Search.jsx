import { PropTypes } from "prop-types";

const Search = ({ searchResults }) => {
	const handleSearch = (e) => {
		e.preventDefault();
		const result = e.target.search.value;

		searchResults(result.toLowerCase());
	};
	return (
		<div className="py-5">
			<form
				onSubmit={handleSearch}
				className="border rounded-full lg:max-w-lg md:max-w-md max-w-xs h-8 lg:h-14 flex mx-auto"
			>
				<input
					type="text"
					name="search"
					placeholder="Search…"
					className="outline-none h-full w-full rounded-s-full px-5 lg:text-lg lg:font-semibold bg-transparent"
				/>
				<button className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 lg:h-12 w-auto p-1"
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
		</div>
	);
};

Search.propTypes = {
	searchResults: PropTypes.func.isRequired,
};
export default Search;
