import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<div>
			<Meta />
      <Nav />
			{children}
		</div>
	);
};

export default Layout;
