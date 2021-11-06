export default function handler(req, res) {
	const posts = [
		{
			id: 1,
			title: 'Transitioning from MySQL to MongoDB',
			body: "When going into software development, for most web applications, there is a need to store data, persistently, in some form or the other. This could include the need to store login/authentication information, financial details, an e-shopper's cart, training data for a machine learning model, etc. This article helps developers who already have a background in SQL and are looking to take advantage of everything Nodejs and MongoDB have to offer",
			link: 'https://dev.to/peteradeojo/transitioning-from-mysql-to-mongodb-433f',
		},
	];
	res.status(200).json(JSON.stringify(posts));
}
