const server = require('./server');

// listening the Server
server.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
