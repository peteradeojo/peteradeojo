import contactStyle from '../styles/Contacts.module.css';
import Image from 'next/image';

const Contact = ({ title, icon, link }) => {
	return (
		<div className={contactStyle.icon}>
			<a
				href={link}
				target='_blank'
				referrerPolicy='no-referrer'
				rel='noreferrer'
			>
				<Image
					src={'/img/' + icon}
					alt={title}
					title={title}
					height={50}
					width={50}
				/>
			</a>
		</div>
	);
};

export default Contact;
