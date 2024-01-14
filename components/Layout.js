import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
	const links = [
		{
			title: 'Home',
			href: '/',
		},
		// {
		// 	title: 'CV',
		// 	href: '/curriculumvitae'
		// },
		// {
		// title: 'Check Me Out',
		// href: '/portfolio'
		// }
	];
	return (
		<div>
			<Meta />
			{/* <Nav links={links} /> */}
			{children}
		</div>
	);
};

export default Layout;
