import { PropTypes } from 'prop-types';

const UnderlinedHead = ({ title, center }) => {
	return (
		<div className={`d-flex ${center ? 'justify-center' : ''}`}>
			<h1 className={'custom-underline'}>{title}</h1>
		</div>
	);
};

UnderlinedHead.propTypes = {
	title: PropTypes.string.isRequired,
};

export default UnderlinedHead;
