import styles from "../styles/CV.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { Whitepane } from "../components/UI";

import UnderlinedHead from "../components/UnderlinedHead";

const Education = ({ details }) => {
	return (
		<div className={styles.education}>
			<div className={styles.qualification}>{details.qualification}</div>
			<div className={styles.institution}>
				{details.institution + ", " + details.address}
			</div>
			<div className={styles.dates}>{details.from + " - " + details.to}</div>
		</div>
	);
};

const Experience = ({ details }) => {
	return (
		<div className={styles.experience}>
			<div className={styles.experienceLocation}>
				<span>{details.role}</span>, {details.location}
			</div>
			<div className={styles.experienceDesc}>{details.description}</div>
			{details.achievements ? (
				<>
					<p
						style={{
							fontWeight: "bold",
							margin: "0px",
							marginTop: "10px",
							color: "#223",
						}}
					>
						Achievements
					</p>
					<ul className={styles.achievements}>
						{details.achievements.map((ach, index) => (
							<li key={index}>{ach}</li>
						))}
					</ul>
				</>
			) : null}
		</div>
	);
};

const Certifications = ({ details }) => {
	return (
		<div className={styles.certification}>
			<div className={styles.certificate}>
				<Image
					src={"/img/" + details.cert}
					width={50}
					height={35}
					alt=''
					layout='responsive'
				/>
			</div>
			<div className={styles.certificationTitle}>{details.title}</div>
			<div className={styles.certificationDetails}>
				<span className={styles.certificationLogo}>
					<Image
						src={"/img/" + details.logo}
						width={"24px"}
						height={"24px"}
						alt=''
					/>
				</span>
				{details.from}
			</div>
		</div>
	);
};

const CurriculumVitae = () => {
	const educationList = [
		{
			institution: "University of Lagos",
			address: "Akoka, Yaba, Lagos, Nigeria",
			qualification: "Computer Engineering, B.Eng",
			course: "Computer Engineering",
			from: "2018",
			to: "present",
		},
		{
			id: 2,
			institution: "The International School, University of Ibadan",
			address: "Ibadan, Oyo State",
			qualification: "WASSCE",
			from: "2012",
			to: "2018",
		},
	];

	const experiences = [
		{
			location:
				"Maternal-Child Specialists' Clinics, Ado-Ekiti, Ekiti State, Nigeria",
			role: "ICT Administrator",
			description:
				"Responsible for troubleshooting a variety of technical issues for staff, assisting with server maintenance, and installing a wide range of equipment.",
			achievements: [
				"Deployed the first Electronic Point of Sales system in the hospital pharmacy.",
				"Responsible for the development, deployment and maintenance of the hospital's web site which provided contact information, directions and allowed patients to schedule visits with specialists.",
			],
		},
		{
			location: "Bincom Dev Center",
			role: "Python Developer Trainee",
			description:
				"A 6 month internship with Bincom dev center as a Python Developer.",
		},
	];

	const certifications = [
		{
			title: "Python 3 Tutorial",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-Python.jpg",
		},
		{
			title: "PHP Tutorial",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-PHP.jpg",
		},
		{
			title: "SQL Fundamentals",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-SQL.jpg",
		},
		{
			title: "JavaScript",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-JS.jpg",
		},
		{
			title: "Python Developer Trainee",
			from: "Bincom Dev Center",
			cert: "binc.jpg",
		},
	];

	return (
		<>
			<div className='container'>
				<UnderlinedHead title={"My CV"} center />
			</div>
			<div className='container'>
				<div className={styles.pane}>
					<h1>Ade-Ojo Boluwatife Peter</h1>
					<p className={styles.contact}>
						adeojopeter@gmail.com, +234 810 349 0675
					</p>
					<ul className={styles.linklist}>
						<li>
							<FaGithub className={styles.icon} />
							<span className={styles.label}>Github:</span>{" "}
							<a href='https://github.com/peteradeojo'>peteradeojo</a>
						</li>
						<li>
							<FaLinkedin className={styles.icon} />
							<span className={styles.label}>LinkedIn:</span>{" "}
							<a href='https://www.linkedin.com/in/peter-ade-ojo-0a52581aa'>
								peteradeojo
							</a>
						</li>
						<li>
							<FaTwitter className={styles.icon} />
							<span className={styles.label}>Twitter:</span>{" "}
							<a href='https://twitter.com/_peterstpatrick'>@_peterstpatrick</a>
						</li>
					</ul>
				</div>
				<div className={styles.pane}>
					<h2>Education</h2>
					{educationList.map((edu, index) => {
						return <Education key={index} details={edu} />;
					})}
				</div>
				<div className={styles.pane}>
					<h2>Experience</h2>
					{/* <Experience /> */}
					{experiences.map((ex, index) => (
						<Experience key={index} details={ex} />
					))}
				</div>
				{/* <div className={styles.pane}>
					<h2>Portfolio</h2>
          <h3>Skills</h3>

				</div> */}
				<div className={styles.pane}>
					<h2>Certifications</h2>
					<div className='row'>
						{certifications.map((cert, index) => (
							<div key={index} className='col-sm-6'>
								<Certifications details={cert} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CurriculumVitae;
