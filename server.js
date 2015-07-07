var koa = require('koa');
var React = require('react');
var Router = require('react-router');
var model = require('./model');
var routes = require('./routes');

var app = koa();

app.use(function *() {
    this.body = yield new Promise(resolve => {
        Router.run(routes, this.req.url, (Handler, request) => {
            model(request.query).
                state.
                take(1).
                subscribe(state => {
                    resolve(React.renderToString(<Handler {...state} />));
                });
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on: http://localhost:3000")
});
