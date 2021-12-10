import Contact from './Contact';
import contactStyle from '../styles/Contacts.module.css';

const Contacts = () => {
	const contacts = [
		{
			id: 1,
			title: 'Twitter',
			icon: 'twitter.svg',
			href: 'https://twitter.com/_peterstpatrick',
		},
		{
			id: 2,
			title: 'Github',
			icon: 'github.svg',
			href: 'https://github.com/peteradeojo',
		},
		{
			id: 3,
			title: 'WhatsApp',
			icon: '',
			href: 'https://api.whatsapp.com/send?phone=2348103490675'
		},
	];

	return (
		<div className={contactStyle.contacts}>
			{contacts.map((contact) => (
				<Contact
					key={contact.id}
					title={contact.title}
					link={contact.href}
					icon={contact.icon}
				/>
			))}
		</div>
	);
};

export default Contacts;
