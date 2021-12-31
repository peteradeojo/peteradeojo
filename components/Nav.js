import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = ({ links }) => {
	return (
		<>
			<nav className={navStyles.nav}>
				<ul>
					{!links ? (
						<>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/about'>About</Link>
							</li>
						</>
					) : (
						links.map((link, index) => {
							return (
								<li key={index}>
									<Link href={link.href}>{link.title}</Link>
								</li>
							);
						})
					)}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
