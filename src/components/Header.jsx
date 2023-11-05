import { Link, NavLink } from "react-router-dom";
const Header = () => {
	const navItem = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/allBlogs">All Blogs</NavLink>
			</li>
			<li>
				<NavLink to="/about">About Us</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact Us</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-lg dropdown-content z-[1] bg-base-200 w-80"
					>
						{navItem}
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost uppercase font-bold text-3xl">
					ST Dev&#39;s
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navItem}</ul>
			</div>
			<div className="navbar-end">
				<Link to="/login" className="btn">
					Login
				</Link>

				{/* <div className="dropdown dropdown-end">
					<label tabIndex={1} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<ul
						tabIndex={1}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						
						<li>
							<h3 className="text-xl">Sara Ali</h3>
						</li>
						<li>
							<button>Logout</button>
						</li>
					</ul>
				</div> */}
			</div>
		</div>
	);
};

export default Header;
