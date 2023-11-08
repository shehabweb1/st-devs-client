import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import RecentBlog from "../components/RecentBlog";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPartners from "./../components/OurPartners";
import { motion, useScroll } from "framer-motion";

const Home = () => {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<motion.path
				d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
				style={{ pathLength: scrollYProgress }}
			>
				<Banner />
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<RecentBlog />
				</motion.div>
				<WhyChooseUs />
				<NewsLetter />
				<OurPartners />
			</motion.path>
		</>
	);
};

export default Home;
