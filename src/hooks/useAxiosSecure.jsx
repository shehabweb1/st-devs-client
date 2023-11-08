import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserProviderContext } from "../authProvider/AuthProvider";

const axiosSecure = axios.create({
	baseURL: "http://localhost:3000",
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
				if (error.response.status === 401 || error.response.status === 403) {
					logOut()
						.then(() => {
							navigate("/login");
						})
						.catch((error) => console.log(error));
				}
			}
		);
	}, [logOut, navigate]);

	return axiosSecure;
};

export default useAxiosSecure;
