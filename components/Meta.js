import Head from 'next/head';
import { NextComponentType } from 'next';

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Peter Ade-Ojo',
	keywords:
		'software developer, peter ade-ojo, ade-ojo, web developer, web design',
	description: 'Portfolio website for Ade-Ojo Peter',
};

export default Meta;
