import { Whitepane, UnderlinedHead } from "../components/UI";
// import UnderlinedHead from "../components/UnderlinedHead";

const items = [
	{
		title: "Klippo",
		description: "An online clipboard for sharing text and files securely",
		image: "https://i.imgur.com/XQQQQQQ.png",
		link: "https://klippo.io",
	},
];

const Item = ({ title, description, image, link }) => {
	return (
		<Whitepane>
			<div className='item'>
				<div className='image'>
					<img src={image} alt={title} />
				</div>
				<div className='content'>
					<div className='header'>
						<h3>{title}</h3>
					</div>
					<div className='description'>
						<p>{description}</p>
					</div>
					<div className='link'>
						<a href={link}>{link}</a>
					</div>
				</div>
			</div>
		</Whitepane>
	);
};

const Portfolio = () => {
	return (
		<>
			<div className='container'>
				<Whitepane>
					<UnderlinedHead center title={"Portfolio"} />
				</Whitepane>
			</div>
			{items.forEach((item) => {
				return <Item props={item} />;
			})}
		</>
	);
};

export default Portfolio;
