import contactStyle from '../styles/Contacts.module.css';

const Contact = ({ title, icon, link }) => {
	return (
		<div className={contactStyle.icon}>
			<a href={link} target='_blank' referrerPolicy='no-referrer'>
				<img src={'/img/' + icon} alt={title} title={title} />
			</a>
		</div>
	);
};

export default Contact;
