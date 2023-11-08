import { useContext } from "react";
import { UserProviderContext } from "../authProvider/AuthProvider";

const useAuth = () => {
	const auth = useContext(UserProviderContext);
	return auth;
};

export default useAuth;
