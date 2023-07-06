export default function handler(req, res) {
	const posts = [
		{
			id: 1,
			title: 'Transitioning from MySQL to MongoDB',
			body: "When going into software development, for most web applications, there is a need to store data, persistently, in some form or the other. This could include the need to store login/authentication information, financial details, an e-shopper's cart, training data for a machine learning model, etc. This article helps developers who already have a background in SQL and are looking to take advantage of everything Nodejs and MongoDB have to offer",
			link: 'https://dev.to/peteradeojo/transitioning-from-mysql-to-mongodb-433f',
		},
		{
			id: 2,
			title: "Sending E-mails in PHP with PHPMailer",
			link: "https://dev.to/peteradeojo/sending-e-mails-in-php-with-phpmailer-15ko",
			body: "E-mails provide one of the most efficient ways of communication. PHPMailer is a PHP library that allows you to send emails from your PHP application. It is a very popular library and is used by many developers. In this article, I will show you how to use PHPMailer to send emails from your PHP application.",
		},
		{
			id: 3,
			title: "Unlocking Actionable Transaction Insights: Weighted Averages for Accurate Predictions",
			link: "https://dev.to/peteradeojo/unlocking-actionable-transaction-insights-weighted-averages-for-accurate-predictions-4c9i",
			body: "Weighted averages involve assigning different weights to sets of transaction data to denote their relevance. By using this technique, we can calculate the reliability of transactions performed by different financial institutions. Read more to find out how"
		}
	];
	res.status(200).json(JSON.stringify(posts));
}
