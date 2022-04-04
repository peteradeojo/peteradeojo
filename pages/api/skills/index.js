export default function handler(req, res) {
	const data = [
		{
			id: 1,
			title: 'NodeJs',
			img: 'node.svg',
		},
		{
			id: 2,
			title: 'PHP',
			img: 'php-logo.svg',
		},
		{
			id: 3,
			title: 'MongoDB',
			img: 'mongodb_white.svg',
		},
		{
			id: 4,
			title: 'React',
			img: 'react.svg',
		},
		{
			id: 5,
			title: 'MySQL',
			img: 'mysql.png',
		},
		{
			id: 6,
			title: 'Laravel',
			img: 'laravel.png'
		},
		{
			id: 7,
			title: 'Python',
			img: 'python-logo-master.png'
		},
		{
			id: 8,
			title: 'Django',
			img: 'django-logo-negative.png'
		},
	];
	res.status(200).json(JSON.stringify(data));
}
