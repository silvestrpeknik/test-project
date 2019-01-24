import logger from 'koa-logger';
import Router from 'koa-router';
import koaBody from 'koa-body';
import Koa, { Context} from 'koa';
import {port} from './config';
import Counter from './counter.model';
import todoRoutes from './todos/routes'; // routes are exported as default, so they can be named anything we want and we do not need to use curly brackets

const app = new Koa();
let ct = new Counter();
let greetings: Array<any> = []

// app.use adds a middleware. Order in code defines order of the middlewares

app.use(logger()); // logs info about requests
app.use(koaBody()); // tries to parse request body to json



app.use(todoRoutes.routes())

app.listen(port, () => {
    console.log("Running ...");
})