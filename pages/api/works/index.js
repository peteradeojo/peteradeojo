export default function handler(req, res) {
	const data = [
		{
			id: 1,
			title: "Maternal-Child Specialists' Clinics",
			url: 'https://maternalchildhosp.com',
			description:
				"I worked on a frontend application for a hospital, Maternal-Child Specialists' Clinics, that allowed them to create an online presence and also allowed customers to book appointments online. I was also responsible for the devOps which included hosting, server configurations and database management.",
			thumbnail: 'mc.png',
			page: 'maternal-child-specialists-clinics',
		},
		{
			id: 2,
			title: 'ABWeather',
			url: 'https://abweather-adeojo.firebaseapp.com/',
			thumbnail: 'mc.png',
			description:
				'A simple JavaScript, progressive web application for fetching real-time weather information from the OpenWeatherMap API. A project for #GADS2020',
		},
		{
			id: 3,
			title: 'NGTailor (On Going Project)',
			url: 'https://ngtailor.herokuapp.com/',
			thumbnail: 'mc.png',
			description:
				'My startup idea for connecting Nigerian tailors to their customers to ensure more accountability, ease of access, and create a sort of ranking system so customers can select from the best.',
		},
	];
	res.status(200).json(JSON.stringify(data));
}
