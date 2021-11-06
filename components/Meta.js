import Head from 'next/head';
import { NextComponentType } from 'next';

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0, user-scalable=no'
			/>
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
			<meta property='og:title' content='Peter Ade-Ojo' />
			<meta property='og:url' content='https://peteradeojo.github.io' />
			<meta property='og:type' content='website' />
			<meta
				property='og:description'
				content='Portfolio website for Ade-Ojo Peter'
			/>
			<meta
				property='og:image'
				content='https://peteradeojo.github.io/logo-300x300.png'
			/>
			<link rel='shortcut icon' href='/favicon-16x16.png' type='image/x-icon' />

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
