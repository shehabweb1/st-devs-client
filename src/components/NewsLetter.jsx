import Swal from "sweetalert2";

const NewsLetter = () => {
	const handleSubscribe = (e) => {
		e.preventDefault();
		const form = e.target;

		Swal.fire({
			text: "Thank you for subscribing to our newsletter!",
			icon: "success",
		});
		form.email.value = "";
	};
	return (
		<div
			className="w-full h-auto bg-cover bg-center py-10"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/7821764/pexels-photo-7821764.jpeg)",
			}}
		>
			<div className="max-w-sm md:max-w-xl lg:max-w-3xl mx-auto bg-black bg-opacity-70 rounded-xl">
				<h3 className="text-3xl lg:text-5xl font-bold text-white text-opacity-75 uppercase text-center tracking-[10px] lg:tracking-[20px] pt-4">
					NewsLetter
				</h3>
				<div className="card-body text-center flex flex-col gap-4">
					<h2 className="text-2xl lg:text-4xl font-black">
						Don&#39;t miss new posts!
					</h2>
					<div>
						<p className="font-bold">
							Subscribe to ST Dev&#39;s newsletter to get updates on new posts.
						</p>
						<p className="text-xs">
							You will only receive an email when a new post is published. No
							spam. No ads.
						</p>
					</div>
					<div>
						<form onSubmit={handleSubscribe}>
							<div className="form-control w-full max-w-md mx-auto">
								<label className="label">
									<span className="label-text">Email Address</span>
								</label>
								<div className="join">
									<input
										type="email"
										name="email"
										className="join-item input lg:input-lg input-bordered w-full max-w-md"
										placeholder="Enter your email"
										required
									/>
									<button
										name="subscribe"
										className="join-item btn lg:btn-lg bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
									>
										Subscribe
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
