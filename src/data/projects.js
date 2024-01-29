// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Ipein Notes',
		category: 'Static Site Build with mkDocs',
		img: require('@/assets/images/web-project-2.jpg'),
		name: 'ipein-notes',
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		name:'',
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
		name:'',
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-2.jpg'),
		name:'',
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
		name:'',
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
		name:'',
	},
];

export default projects;
