import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
	};

	const handleLoginWithGoogle = () => {};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="flex items-center gap-5 lg:gap-0 flex-col lg:flex-row">
				<div className="lg:w-1/2">
					<img
						src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
						alt="Hero Image"
						className="rounded-2xl"
					/>
				</div>
				<div className="mt-10 w-full pb-5 lg:w-1/2">
					<h1 className="text-center text-3xl font-semibold mb-10">
						Login your account
					</h1>
					<form
						className="lg:max-w-md mx-auto p-10 space-y-6 shadow-2xl bg-base-200"
						onSubmit={handleLogin}
					>
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
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter your password"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
							>
								Login
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

					<p className="mt-5 text-center text-sm text-gray-500">
						Not a member?{" "}
						<Link
							to="/register"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
						>
							Create an Account
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
