export default function handler(req, res) {
	const data = [
		{
			id: 3,
			title: "Typegen (Typescript Types Generator)",
			url: "https://typegen.vercel.app",
			description: "Generates Typescript type definitions from JSON schema",
			github: "https://githuh.com/peteradeojo/typegen",
			thumbnail: '/img/typegen.png'
		},
		{
			id: 1,
			title: "Doppler",
			thumbnail: "https://usedoppler.app/image.png",
			url: "https://usedoppler.app",
			description: "Doppler is an all-in-one platform that provides end-to-end visibility into your software stack, from infrastructure to application-level monitoring. Our intuitive interface and AI-powered analytics make it easy to identify errors, prevent crashes, and catch issues before they escalate.",
		},
		{
			id: 4,
			title: "Maternal-Child Specialists' Clinics",
			url: "https://maternalchildhosp.net",
			description:
				"Frontend application for a hospital, Maternal-Child Specialists' Clinics, that allowed them to create an online presence and also allowed customers to book appointments online.",
			// thumbnail: "mc.png",
			page: "maternal-child-specialists-clinics",
		},
		{
			id: 7,
			title: "ABWeather",
			url: "https://abweather-adeojo.firebaseapp.com/",
			// thumbnail: "mc.png",
			description:
				"A simple JavaScript, progressive web application for fetching real-time weather information from the OpenWeatherMap API. A project for #GADS2020",
			github: "https://github.com/peteradeojo/abweather",
		},
		{
			id: 6,
			title: "To-do List",
			description:
				"A user authenticated todo list application built with Python and Django for my Bincom Python Developer Trainee Intermediate Test",
			github:
				"https://github.com/peteradeojo/bincom-beginner-test/tree/main/Q2",
		},
		{
			id: 5,
			title: "Pent Housing Reviews API",
			// url: "https://pent-housing-reviews.herokuapp.com",
			description:
				"Pent is a hypothetical platform where users can sign up with their basic information and post reviews about apartments they have previously lived in. These reviews can include optional videos and/or images. The users can give reviews about the landlords, the environment the apartment is situated, and the quality of amenities in the apartment. These reviews can be uniquely marked as helpful by random visitors of the platform. Visitors can also sort these reviews based on the most helpful(by count) or most recent",
			github: "https://github.com/peteradeojo/pent-assessment",
		},
	];
	res.status(200).json(JSON.stringify(data));
}
