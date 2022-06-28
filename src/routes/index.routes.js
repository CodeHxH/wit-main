const router = require('express').Router();

const projects = [
	{
		name: 'Wit Store',
		type: 'E-commerce',
		img: '/img/imagen1.jpg',
		lastUpdate: '13/6/2022',
		link: 'https://wit-store.herokuapp.com/',
	},
	{
		name: 'E3 2021',
		type: 'Web',
		img: '/img/imagen2.png',
		lastUpdate: '13/6/2022',
		link: 'https://witsite-e3.herokuapp.com/',
	},
	{
		name: 'Photo Album',
		type: 'Gallery',
		img: '/img/imagen3.png',
		lastUpdate: '13/6/2022',
		link: 'https://codehxh.github.io/Galeria/',
	},
	{
		name: 'Notes App',
		type: 'Aplication',
		img: '/img/imagen4.png',
		lastUpdate: '13/6/2022',
		link: 'https://witsite-notes.herokuapp.com/',
	},
];

// Routes
router.get('/', (req, res) => {
	res.render('index', { projects });
});

// Export the router
module.exports = router;
