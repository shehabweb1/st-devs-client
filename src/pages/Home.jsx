import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import RecentBlog from "../components/RecentBlog";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPartners from "./../components/OurPartners";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<>
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
		</>
	);
};

export default Home;
