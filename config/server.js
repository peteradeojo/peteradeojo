const server =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:3000'
		: 'https://portfolio-api-2021.herokuapp.com';

export default server;
