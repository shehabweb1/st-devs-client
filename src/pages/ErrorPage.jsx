import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
	return (
		<>
			<Header />
			<div className="py-10 h-screen">
				<h1 className="text-4xl text-center font-semibold">404 Not Found</h1>
				<p className="text-center my-5">This page is not found</p>
				<Link to="/">
					<button className="btn btn-primary mx-auto block">Go Back</button>
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default ErrorPage;
