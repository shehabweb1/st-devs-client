import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserProviderContext } from "../authProvider/AuthProvider";
import { PropTypes } from "prop-types";

const PrivateRoutes = ({ children }) => {
	const { user } = useContext(UserProviderContext);
	const location = useLocation();

	if (user) {
		return children;
	}

	return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
	children: PropTypes.node.isRequired,
};
