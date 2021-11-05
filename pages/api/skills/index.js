export default function handler(req, res) {
	const data = [
		{
			id: 1,
			title: 'NodeJs',
		},
		{
			id: 2,
			title: 'PHP',
		},
		{
			id: 3,
			title: 'MongoDB',
		},
	];
	res.status(200).json(data);
}
