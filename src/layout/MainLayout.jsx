import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { UserProviderContext } from "../authProvider/AuthProvider";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MainLayout = () => {
	const { loading } = useContext(UserProviderContext);
	if (loading) {
		return (
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<Skeleton />
			</SkeletonTheme>
		);
	}
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
