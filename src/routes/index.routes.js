const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
	res.render('index');
});

// Export the router
module.exports = router;
