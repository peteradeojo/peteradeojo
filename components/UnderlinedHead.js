import { PropTypes } from "prop-types";

const UnderlinedHead = ({ title, center }) => {
	return (
		<h1
			className={`custom-underline font-bold text-3xl ${
				center && "text-center"
			}`}
		>
			{title}
		</h1>
	);
};

UnderlinedHead.propTypes = {
	title: PropTypes.string.isRequired,
};

export default UnderlinedHead;
