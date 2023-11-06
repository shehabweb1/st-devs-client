import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div
			className="hero h-auto"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content py-40">
				<div className="max-w-md">
					<h1 className="mb-5 text-4xl font-bold uppercase text-white text-opacity-75">
						Welcome to ST DEV&#39;S
					</h1>
					<p className="mb-5 text-white text-opacity-60">
						Are you passionate about web development? Eager to stay ahead in
						this ever-evolving digital landscape? You&#39;ve come to the right
						place!
					</p>
					<Link to="/allBlogs">
						<button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none">
							Get Started
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
