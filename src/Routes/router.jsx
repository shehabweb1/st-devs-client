import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layout/MainLayout";
import ErrorPage from "./../pages/ErrorPage";
import Home from "./../pages/Home";
import Login from "../pages/Login";

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
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
