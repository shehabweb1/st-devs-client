import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<div className="container mx-auto">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
