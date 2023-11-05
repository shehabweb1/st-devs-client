const Login = () => {
	return (
		<div>
			<form className="py-10 flex flex-col justify-center items-center gap-3">
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<button className="btn" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
