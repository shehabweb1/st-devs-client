import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import RecentBlog from "../components/RecentBlog";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPartners from "./../components/OurPartners";

const Home = () => {
	
	return (
		<>
			<Banner />
			<RecentBlog />
			<WhyChooseUs />
			<NewsLetter />
			<OurPartners />
		</>
	);
};

export default Home;
