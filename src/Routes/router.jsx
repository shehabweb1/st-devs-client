import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layout/MainLayout";
import ErrorPage from "./../pages/ErrorPage";
import Home from "./../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AllBlogs from "../pages/AllBlogs";
import AddBlog from "./../pages/AddBlog";
import Register from "../pages/Register";
import FeaturedBlogs from "./../pages/FeaturedBlogs";
import Wishlist from "../pages/Wishlist";
import PrivateRoutes from "./PrivateRoutes";
import BlogDetails from "./../pages/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/allBlogs",
				element: <AllBlogs />,
			},
			{
				path: "/featuredBlogs",
				element: <FeaturedBlogs />,
			},
			{
				path: "/blogDetails/:id",
				element: <BlogDetails />,
				loader: ({ params }) =>
					fetch(`http://localhost:3000/blogs/${params.id}`),
			},
			{
				path: "/addBlog",
				element: (
					<PrivateRoutes>
						<AddBlog />
					</PrivateRoutes>
				),
			},
			{
				path: "/UpdateBlog/:id",
				element: (
					<PrivateRoutes>
						<UpdateBlog />
					</PrivateRoutes>
				),
			},
			{
				path: "/wishlist",
				element: (
					<PrivateRoutes>
						<Wishlist />
					</PrivateRoutes>
				),
				loader: () => fetch("http://localhost:3000/wishlist"),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

export default router;
