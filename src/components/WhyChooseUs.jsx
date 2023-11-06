import SectionHeader from "./SectionHeader";

const WhyChooseUs = () => {
	return (
		<div className="py-10">
			<SectionHeader title="Why Choose Us" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
				<div
					className="w-full h-full bg-cover bg-center py-10"
					style={{
						backgroundImage:
							"url(https://images.pexels.com/photos/3202235/pexels-photo-3202235.jpeg)",
					}}
				></div>
				<div className="my-3">
					<p>
						At ST DEV&#39;s, we&#39;re dedicated to bringing you the latest
						insights, tutorials, and inspiration to fuel your web development
						journey. Explore our extensive collection of blog posts, guides, and
						tutorials covering every facet of web development, from coding to
						design and everything in between.
					</p>
					<ul className="p-5 list-disc list-outside">
						<li className="mb-3">
							<span className="font-semibold">Expert Guidance:</span> Our
							seasoned team of developers and designers provides expert guidance
							to help you conquer the complexities of web development.
						</li>
						<li className="mb-3">
							<span className="font-semibold">Fresh Insights:</span> Stay on the
							cutting edge of technology with our up-to-date content that
							reflects the latest trends and best practices.
						</li>
						<li className="mb-3">
							<span className="font-semibold">Thriving Community:</span> Join
							our vibrant community of developers, share your knowledge, ask
							questions, and grow together.
						</li>
					</ul>
					<p>
						Ready to dive into the world of web development? Begin your journey
						with ST DEV&#39;s today. Unleash your creativity, embrace
						innovation, and master the art of web development.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
