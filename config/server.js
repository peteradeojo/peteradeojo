const server =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:3000'
		: 'https://peteradeojo.vercel.app';

export default server;
