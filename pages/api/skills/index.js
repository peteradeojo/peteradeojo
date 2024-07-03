export default function handler(req, res) {
	const data = [
		{
			id: 1,
			title: 'NodeJs',
			img: 'node.svg',
			style: {
				width: '100',
				height: '50',
			}
		},
		{
			id: 2,
			title: 'PHP',
			img: 'php-logo.svg',
			style: {
				width: '100',
				height: '50',
			}
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
			style: {
				width: '100',
				height: '50',
			}
		},
		{
			id: 6,
			title: 'Laravel',
			img: 'laravel.png'
		},
		{
			id: 9,
			title: 'Docker',
			img: 'docker.png',
			style: {
				width: '100',
				height: '70',
			}
		}
	];
	res.status(200).json(JSON.stringify(data));
}
