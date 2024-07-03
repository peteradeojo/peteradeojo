import Contact from "./Contact";

const Contacts = () => {
	const contacts = [
		{
			id: 1,
			title: "Twitter",
			icon: "twitter.svg",
			href: "https://twitter.com/boluwatifee__",
		},
		{
			id: 2,
			title: "Github",
			icon: "github.svg",
			href: "https://github.com/peteradeojo",
		},
		{
			id: 3,
			title: "WhatsApp",
			icon: "icons8-whatsapp.svg",
			href: "https://api.whatsapp.com/send?phone=2348103490675",
		},
	];

	return (
		<div className={"flex justify-between items-center md:w-1/3 m-auto"}>
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
