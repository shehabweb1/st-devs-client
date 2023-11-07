import { useContext, useState } from "react";
import { UserProviderContext } from "../authProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Wishlist = () => {
	const { user } = useContext(UserProviderContext);
	const wishlistData = useLoaderData();

	const filterWishlistData = wishlistData.filter((c) => c.email === user.email);

	const [wishlistBlog, setWishlistBlog] = useState(filterWishlistData);

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
				fetch(`http://localhost:3000/wishlist/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
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
				{wishlistBlog.map((data) => (
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
				))}
			</div>
		</>
	);
};

export default Wishlist;
