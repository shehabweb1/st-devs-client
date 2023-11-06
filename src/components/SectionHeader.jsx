import { PropTypes } from "prop-types";
const SectionHeader = ({ title }) => {
	return (
		<div className="pb-5">
			<h3 className="text-2xl text-center font-semibold">{title}</h3>
			<div className="h-1 w-28 bg-slate-500 mx-auto my-2"></div>
		</div>
	);
};

export default SectionHeader;

SectionHeader.propTypes = {
	title: PropTypes.node.isRequired,
};
