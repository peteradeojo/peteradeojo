export default function handler(req, res) {
	const data = [
		{
			id: 1,
			title: "Maternal-Child Specialists' Clinics",
			url: "https://maternalchildhosp.com",
			description:
				"I worked on a frontend application for a hospital, Maternal-Child Specialists' Clinics, that allowed them to create an online presence and also allowed customers to book appointments online. I was also responsible for the devOps which included hosting, server configurations and database management.",
			thumbnail: "mc.png",
			page: "maternal-child-specialists-clinics",
		},
		{
			id: 2,
			title: "ABWeather",
			url: "https://abweather-adeojo.firebaseapp.com/",
			thumbnail: "mc.png",
			description:
				"A simple JavaScript, progressive web application for fetching real-time weather information from the OpenWeatherMap API. A project for #GADS2020",
			github: "https://github.com/peteradeojo/abweather"
		},
		{
			id: 3,
			title: "KAIZEN (Ongoing)",
			url: "https://github.com/peteradeojo/kaizen",
			description:
				"A front-page for my friend's clothing store to make orders and deliveries easier.",
		},
		{
			id: 4,
			title: "To-do List",
			url: "https://adeojo-bincom-test/",
			description:
				"A user authenticated todo list application built with Python and Django for my Bincom Python Developer Trainee Intermediate Test",
			github:
				"https://github.com/peteradeojo/bincom-beginner-test/tree/main/Q2",
		},
	];
	res.status(200).json(JSON.stringify(data));
}
