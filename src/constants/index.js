import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	usaid,
	doh,
	github1,
	nextjs,
	netflix,
	airbnb,
	tweeter,
	live,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'skills',
		title: 'Skills',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'NextJs Developer',
		icon: web,
	},
	{
		title: 'React Developer',
		icon: web,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},

	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},

	{
		name: 'Github',
		icon: github1,
	},

	{
		name: 'Next JS',
		icon: nextjs,
	},
]

const experiences = [
	{
		title: 'IT Consultant / IT support for Vaccination Sites',
		company_name: 'USAID',
		icon: usaid,
		iconBg: '#E6DEDD',
		date: 'July 2022 - September 2022',
		points: [
			'Data entry for all patients to be immunized for Covid-19 vaccine.',
			'Organize and manage patient data.',
			'Consolidate all data of vaccinated patients of the barangays under our jurisdiction.',
			'Providing technical support in the vaccination area.',
		],
	},
	{
		title: 'Data Manager',
		company_name: 'Department of Health / Unicef',
		icon: doh,
		iconBg: '#383E56',
		date: 'Dec 2021 - March 2022',
		points: [
			'Data entry for all patients to be immunized for Covid-19 vaccine.',
			'Organize and manage patient data.',
			'Consolidate all data of vaccinated patients of the barangays under our jurisdiction.',
			'Providing technical support in the vaccination area.',
		],
	},
	// {
	// 	title: 'Web Developer',
	// 	company_name: 'Shopify',
	// 	icon: shopify,
	// 	iconBg: '#383E56',
	// 	date: 'Jan 2022 - Jan 2023',
	// 	points: [
	// 		'Developing and maintaining web applications using React.js and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 		'Participating in code reviews and providing constructive feedback to other developers.',
	// 	],
	// },
	// {
	// 	title: 'Full stack Developer',
	// 	company_name: 'Meta',
	// 	icon: meta,
	// 	iconBg: '#E6DEDD',
	// 	date: 'Jan 2023 - Present',
	// 	points: [
	// 		'Developing and maintaining web applications using React.js and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 		'Participating in code reviews and providing constructive feedback to other developers.',
	// 	],
	// },
]

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

const projects = [
	{
		name: 'Hotel BNB',
		description:
			'AirBnb clone that allows users to search, book, and manage property rentals from various providers, providing a convenient and efficient solution for vacation and rental needs.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'leafletjs',
				color: 'green-text-gradient',
			},
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
		],
		image: airbnb,
		source_code_link: 'https://github.com/jobenapao01/hotelbnb',
		demo_link: 'https://hotelbnb.vercel.app/',
	},
	{
		name: 'Tweety',
		description:
			'Twitter clone that allows users to add, delete, and edit tweets. Also allows users to add other users.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
		],
		image: tweeter,
		source_code_link: 'https://github.com/jobenapao01/tweety',
		demo_link: 'https://tweety-gamma.vercel.app/',
	},
	{
		name: 'Nietflix',
		description:
			'Netflix clone that allows user to login, add favorite and remove favorite movies.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
		],
		image: netflix,
		source_code_link: 'https://github.com/jobenapao01/nietflix',
		demo_link: 'https://nietflix-omega.vercel.app/auth',
	},
]

export { services, technologies, experiences, testimonials, projects }
