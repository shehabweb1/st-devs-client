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
				path: "/addBlog",
				element: <AddBlog />,
			},
			{
				path: "/allBlogs",
				element: <AllBlogs />,
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
