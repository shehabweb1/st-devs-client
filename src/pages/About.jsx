import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<div
				className="hero min-h-fit"
				style={{
					backgroundImage:
						"url(https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg)",
				}}
			>
				<div className="bg-[#000000b3] w-full h-full"></div>
				<div className="hero-content text-center py-36 text-white">
					<div className="max-w-lg">
						<h1 className="text-5xl font-bold">ABOUT US</h1>
						<p className="py-6 text-2xl font-semibold">
							Welcome to ST Dev&#39;s
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto py-10">
				<div className="mb-5">
					<h3 className="text-xl font-semibold mb-3">Who We Are</h3>
					<p className="mb-3">
						We are a passionate team of web developers and enthusiasts,
						dedicated to sharing our knowledge and insights with the world. Our
						journey in the world of web development began with a simple idea –
						to make the web a better place through creativity, innovation, and
						the power of coding.
					</p>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">Our Mission</h2>
					<p>
						Our mission is to empower aspiring web developers, designers, and
						tech enthusiasts with the information, resources, and inspiration
						they need to create amazing web experiences. We believe that the
						internet is an ever-evolving canvas, and our goal is to help you
						paint your vision with the digital brush.
					</p>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">What We Offer</h2>
					<ul className="list-disc list-inside">
						<li>
							<span className="font-bold">Informative Blogs: </span>
							Our blog posts cover a wide range of web development topics, from
							front-end design to back-end coding, SEO strategies, and the
							latest web development trends.
						</li>
						<li>
							<span className="font-bold">Tutorials: </span>
							We provide step-by-step tutorials to guide you through building
							your own websites and web applications.
						</li>
						<li>
							<span className="font-bold">Community: </span>
							We foster a welcoming community where developers can share their
							ideas, ask questions, and learn from each other.
						</li>
					</ul>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">Why Choose Us</h2>
					<ul className="list-disc list-inside">
						<li>
							<span className="font-bold">Expertise: </span>
							Our team consists of experienced web developers who have their
							fingers on the pulse of the industry.
						</li>
						<li>
							<span className="font-bold">Passion: </span>
							We are not just web developers; we are web development
							enthusiasts. We love what we do, and we want to share that passion
							with you.
						</li>
						<li>
							<span className="font-bold">Up-to-Date Information: </span>
							The web development world evolves rapidly, and we ensure our
							content is always current and relevant.
						</li>
					</ul>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">
						Join Us on This Journey
					</h2>
					<p>
						We believe in the power of the web to connect people, ideas, and
						possibilities. Whether you&#39;re a beginner or an experienced
						developer, we invite you to join us on this exciting journey of web
						development.
					</p>
					<p>
						Thank you for visiting ST Dev&#39;s, and we look forward to being
						your companion in the world of web development.
					</p>
					<p>
						If you have any questions, suggestions, or feedback, please feel
						free to <Link to="/contact" className="text-blue-500">contact us</Link>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
