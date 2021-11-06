import Meta from '../components/Meta';
import UnderlinedHead from '../components/UnderlinedHead';

const about = () => {
	return (
		<>
			<Meta title='About | Peter Ade-Ojo' />
			<div className='container'>
				<UnderlinedHead title='About Me' center />

				<p className='container'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae
					aperiam, saepe voluptate nam officiis fugit animi, ducimus eaque quam
					architecto molestiae sed magnam assumenda et perspiciatis molestias.
					Et, quo.
				</p>
			</div>
		</>
	);
};

export default about;
