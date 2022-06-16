const router = require('express').Router();

const projects = [
	{
		name: 'Paripi store',
		type: 'Tienda',
		img: '/img/imagen1.png',
		lastUpdate: '13/6/2022',
		link: 'https://witsite.onrender.com/',
	},
	{
		name: 'Paripi store',
		type: 'web',
		img: '/img/imagen2.png',
		lastUpdate: '13/6/2022',
		link: 'https://witsite.onrender.com/',
	},
	{
		name: 'Paripi store',
		type: 'Tienda',
		img: '/img/imagen3.png',
		lastUpdate: '13/6/2022',
		link: 'https://witsite.onrender.com/',
	},
	{
		name: 'Paripi store',
		type: 'Tienda',
		img: '/img/imagen4.png',
		lastUpdate: '13/6/2022',
		link: 'https://witsite.onrender.com/',
	},
];

// Routes
router.get('/', (req, res) => {
	res.render('index', { projects });
});

// Export the router
module.exports = router;
