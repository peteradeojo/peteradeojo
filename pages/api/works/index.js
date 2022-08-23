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
			github: "https://github.com/peteradeojo/abweather",
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
		{
			id: 5,
			title: "Pent Housing Reviews API",
			url: "https://pent-housing-reviews.herokuapp.com",
			description:
				"Pent is a hypothetical platform where users can sign up with their basic information and post reviews about apartments they have previously lived in. These reviews can include optional videos and/or images. The users can give reviews about the landlords, the environment the apartment is situated, and the quality of amenities in the apartment. These reviews can be uniquely marked as helpful by random visitors of the platform. Visitors can also sort these reviews based on the most helpful(by count) or most recent",
			github: "https://github.com/peteradeojo/pent-assessment",
		},
	];
	res.status(200).json(JSON.stringify(data));
}
