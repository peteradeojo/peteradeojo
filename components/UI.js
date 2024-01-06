import { PropTypes } from "prop-types";
import componentStyles from "../src/scss/Components.module.scss";

const Whitepane = ({ children, small }) => {
	return (
		<div
			className={
				componentStyles.whitepane +
				" " +
				(() => {
					return small ? componentStyles.smallpane : "";
				})()
			}
		>
			{children}
		</div>
	);
};

const UnderlinedHead = ({ title, center, underlined }) => {
	return <h1 style={{ textAlign: center ? "center" : "auto" }}>{title}</h1>;
};

UnderlinedHead.propTypes = {
	title: PropTypes.string.isRequired,
};

export { Whitepane, UnderlinedHead };
