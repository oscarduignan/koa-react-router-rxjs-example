import koa from 'koa';
import Rx from 'rx';
import React from 'react';
import Router from 'react-router';
import model from './model';
import routes from './routes';
import { intents } from './intents';

var app = koa();

app.use(function *() {
    this.body = yield new Promise(resolve => {
        Router.run(routes, this.req.url, (Handler, { query: { recipient } }) => {

            // you pass your model an observable of intents to get your state
            // here I'm just setting some default values required to generate
            // the state for the application!
            model(Rx.Observable.fromArray([
                intents.changeRecipient(recipient || "World")
            ])).
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
