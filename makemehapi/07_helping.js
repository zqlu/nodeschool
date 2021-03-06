var hapi = require("hapi"),
    path = require("path");

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.views({
    engines: {
        html: require("handlebars")
    },
    path: path.join(__dirname, '07_templates'),
    helpersPath: path.join(__dirname, '07_helpers')
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        view: 'index.html'
    }
});

server.start();