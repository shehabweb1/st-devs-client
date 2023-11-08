import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserProviderContext } from "../authProvider/AuthProvider";

const axiosSecure = axios.create({
	baseURL: "https://st-dev-server.vercel.app",
	withCredentials: true,
});

const useAxiosSecure = () => {
	const { logOut } = useContext(UserProviderContext);
	const navigate = useNavigate();
	useEffect(() => {
		axiosSecure.interceptors.response.use(
			(res) => {
				return res;
			},
			(error) => {
				console.log("error tracked in the interceptor", error.response);
				if (error.response.status === 401 || error.response.status === 403) {
					console.log("logout the user");
					logOut()
						.then(() => {
							navigate("/login");
						})
						.catch((error) => console.log(error));
				}
			}
		);
	}, []);

	return axiosSecure;
};

export default useAxiosSecure;
