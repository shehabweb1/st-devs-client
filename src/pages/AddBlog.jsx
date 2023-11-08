import moment from "moment/moment";
import { useContext } from "react";
import Swal from "sweetalert2";
import { UserProviderContext } from "./../authProvider/AuthProvider";

const AddBlog = () => {
	const { user } = useContext(UserProviderContext);
	const writer = {
		name: user.displayName,
		email: user.email,
		photo: user.photoURL,
	};

	const postDate = moment().format("ll");

	const handleAddBlog = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const title = form.get("title");
		const image = form.get("image");
		const category = form.get("category");
		const shortDesc = form.get("shortDesc");
		let longDesc = form.get("longDesc");

		const newBlog = {
			title,
			image,
			category,
			shortDesc,
			longDesc,
			writer,
			postDate,
		};

		fetch("https://newblogs-lovat.vercel.app/blogs", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newBlog),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire("Successfully!", "New Blog Added!", "success");
					e.target.title.value = "";
					e.target.image.value = "";
					e.target.category.value = "Select Blog Category";
					e.target.shortDesc.value = "";
					e.target.longDesc.value = "";
				}
			});
	};

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl text-center font-semibold my-10 uppercase">
				Write an new blog
			</h1>
			<div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-xl">
				<form onSubmit={handleAddBlog}>
					<div className="mb-3">
						<label
							htmlFor="title"
							className="block text-sm font-medium leading-6 "
						>
							Blog Title
						</label>
						<div className="mt-2">
							<input
								id="title"
								name="title"
								type="text"
								autoComplete="title"
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Write Blog Title"
							/>
						</div>
					</div>
					<div className="mb-3">
						<label
							htmlFor="image"
							className="block text-sm font-medium leading-6 "
						>
							Blog Image
						</label>
						<div className="mt-2">
							<input
								id="image"
								name="image"
								type="text"
								autoComplete="image"
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Enter Image url"
							/>
						</div>
					</div>
					<div className="mb-3">
						<label
							htmlFor="category"
							className="block text-sm font-medium leading-6 "
						>
							Blog Category
						</label>
						<select
							className="select w-full block rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							id="category"
							name="category"
							type="text"
							autoComplete="category"
							required
						>
							<option defaultValue="Select Blog Category">
								Select Blog Category
							</option>
							<option value="HTML">HTML</option>
							<option value="CSS">CSS</option>
							<option value="JavaScript">JavaScript</option>
							<option value="React">React</option>
							<option value="Next.js">Next.js</option>
							<option value="NodeJS">NodeJS</option>
							<option value="Express.js">Express.js</option>
							<option value="MongoDB">MongoDB</option>
						</select>
					</div>
					<div className="mb-3">
						<label
							htmlFor="shortDesc"
							className="block text-sm font-medium leading-6 "
						>
							Short description
						</label>
						<textarea
							rows="2"
							id="shortDesc"
							name="shortDesc"
							autoComplete="shortDesc"
							required
							className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Write a short description"
						></textarea>
					</div>
					<div className="mb-3">
						<label
							htmlFor="longDesc"
							className="block text-sm font-medium leading-6 "
						>
							Long description
						</label>
						<textarea
							rows="6"
							id="longDesc"
							name="longDesc"
							autoComplete="longDesc"
							required
							className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Write a long description"
						></textarea>
					</div>

					<div className="lg:col-span-2 mx-auto">
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
						>
							Add Blog
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddBlog;
