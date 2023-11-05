import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserProviderContext } from "../authProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
	const { createAccount, loginWithGoogle } = useContext(UserProviderContext);

	const navigate = useNavigate();

	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(null);
	const [isFormValid, setIsFormValid] = useState(false);

	const validatePassword = (inputPassword) => {
		if (inputPassword.length < 6) {
			setShowError("Must be is more than 6 characters");
		} else if (!/[A-Z]/.test(inputPassword)) {
			setShowError("Must be have a capital letter");
		} else if (!/[0-9]/.test(inputPassword)) {
			setShowError("Must be have a number");
		} else if (!/[!@#$%^&*()_+=[\]{}|;:'",<.>/?\\]/.test(inputPassword)) {
			setShowError("Must be have a special character");
		} else {
			setShowError(null);
		}

		setIsFormValid(
			inputPassword.length < 6 &&
				!/[A-Z]/.test(inputPassword) &&
				!/[A-Z]/.test(inputPassword) &&
				!/[!@#$%^&*()_+=[\]{}|;:'",<.>/?\\]/.test(inputPassword)
		);
	};

	const handleChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
		validatePassword(newPassword);
	};

	const handleRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const photo = form.get("photo");
		const password = form.get("password");

		createAccount(email, password)
			.then((result) => {
				if (result.insertedId) {
					updateProfile(auth.currentUser, {
						displayName: name,
						photoURL: photo,
					})
						.then((result) => {
							if (result) {
								navigate("/");
								Swal.fire(
									`Thank You ${name}!`,
									"Your account has been created successful!",
									"success"
								);
							}
						})
						.catch((error) => {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: error.message,
							});
						});
				}
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				});
			});
	};

	const handleLoginWithGoogle = () => {
		loginWithGoogle()
			.then((result) => {
				if (result) {
					navigate("/");
					Swal.fire(
						"Thank You!",
						"Your account has been login successful!",
						"success"
					);
				}
			})
			.catch((error) => {
				const errorMessage = error.message;
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: errorMessage,
				});
			});
	};
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="flex items-center gap-5 lg:gap-0 flex-col lg:flex-row">
				<div className="lg:w-1/2 p-5">
					<img
						src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg"
						alt="Hero Image"
						className="rounded-2xl"
					/>
				</div>
				<div className="mt-10 w-full pb-5 lg:w-1/2">
					<h1 className="text-center text-3xl font-semibold mb-10">
						Create a new Account
					</h1>
					<form
						className="lg:max-w-md mx-auto p-10 space-y-6 shadow-2xl bg-base-200"
						onSubmit={handleRegister}
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 "
							>
								Full Name
							</label>
							<div className="mt-2">
								<input
									id="name"
									name="name"
									type="text"
									autoComplete="name"
									required
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									placeholder="Enter your name"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6 "
							>
								Profile Photo
							</label>
							<div className="mt-2">
								<input
									id="photo"
									name="photo"
									type="text"
									autoComplete="photo"
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									placeholder="Enter your photo url"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 "
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter your email address"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 "
								>
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									value={password}
									onChange={handleChange}
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									placeholder="Enter your password"
								/>
							</div>
							{<p className="text-red-600">{showError}</p>}
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center disabled:bg-blue-400 rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
								disabled={isFormValid}
							>
								Register Now
							</button>
						</div>
					</form>

					<div className="my-5 flex gap-2 items-center justify-center">
						<p>Login With Google Account</p>
						<button
							onClick={handleLoginWithGoogle}
							className="flex items-center gap-2 py-1 px-5 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-600 hover:text-white"
						>
							<FaGoogle className="text-blue-600" /> Google
						</button>
					</div>

					<p className="mt-10 text-center text-sm text-gray-500">
						If you have an account? Please{" "}
						<Link
							to="/login"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
