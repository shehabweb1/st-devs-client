import SectionHeader from "./SectionHeader";

const OurPartners = () => {
	return (
		<div className="py-10">
			<SectionHeader title="Our Partners" />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center mx-auto">
				<img
					src="https://i.ibb.co/QrmzmXJ/IBM.png"
					alt="IBM"
					className="max-w-sm max-h-32 mx-auto"
				/>
				<img
					src="https://i.ibb.co/10CmqCq/meta.png"
					alt="Meta"
					className="max-w-sm max-h-32 mx-auto"
				/>
				<img
					src="https://i.ibb.co/DVZrMMb/open.png"
					alt="OpenJS"
					className="max-w-sm max-h-32 mx-auto"
				/>
				<img src="https://i.ibb.co/187XfGd/s.png" alt="S" />
				<img
					src="https://i.ibb.co/4d0ctLw/tcss.png"
					alt="Tailwind CSS"
					className="max-w-sm max-h-32 mx-auto"
				/>
				<img
					src="https://i.ibb.co/d7dtD89/MongoDB.png"
					alt="MongoDB"
					className="max-w-sm max-h-32 mx-auto"
				/>
			</div>
		</div>
	);
};

export default OurPartners;
