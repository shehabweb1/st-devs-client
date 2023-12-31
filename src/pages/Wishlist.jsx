import { useContext, useEffect, useState } from "react";
import { UserProviderContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "./../hooks/useAxiosSecure";

const Wishlist = () => {
	const { user } = useContext(UserProviderContext);
	const [wishlistBlog, setWishlistBlog] = useState([]);
	const axiosSecure = useAxiosSecure();

	const url = `https://newblogs-maves-projects.vercel.app/wishlist?email=${user?.email}`;
	useEffect(() => {
		axiosSecure.get(url).then((res) => setWishlistBlog(res.data));
	}, [url, axiosSecure]);

	const handleRemove = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://newblogs-maves-projects.vercel.app/wishlist/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
						}

						const remainingBlog = wishlistBlog.filter(
							(blog) => blog._id !== id
						);

						setWishlistBlog(remainingBlog);
					});
			}
		});
	};

	return (
		<>
			<div className="py-10">
				{wishlistBlog.length > 0 ? (
					wishlistBlog.map((data) => (
						<div
							className="mb-4 grid grid-cols-4 gap-2 border shadow-lg md:mx-4"
							key={data._id}
						>
							<img src={data.image} alt={data.title} className="w-auto" />
							<div className="col-span-2 md:py-3">
								<h3 className="lg:text-3xl font-semibold mb-2">{data.title}</h3>
								<p className="badge badge-info lg:my-3">{data.category}</p>
								<p className="hidden md:block">{data.shortDesc}</p>
							</div>
							<div className="my-auto mx-auto">
								<Link to={`/blogDetails/${data.id}`}>
									<button className="block mb-3 btn py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
										Details
									</button>
								</Link>
								<button
									onClick={() => handleRemove(data._id)}
									className="btn py-1 px-3 text-white bg-red-600 hover:bg-red-800"
								>
									Remove
								</button>
							</div>
						</div>
					))
				) : (
					<div className="py-10">
						<h2 className="text-xl font-semibold text-center">
							You haven&#39;t add wishlist{" "}
						</h2>
					</div>
				)}
			</div>
		</>
	);
};

export default Wishlist;
