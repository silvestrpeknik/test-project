// const http = require('http'); // pure js
import http, { IncomingMessage, ServerResponse } from 'http'; // better than require, because it also gives us types. Import is normal js command, but node.js or browsers do not support it. Here, ts-node handles it.
import requestHandler from './requestHandler';
import { port } from './config'

/**
 * process.on is global handling of events, and also more
 * try running the server twice, see how it crashes on blocked port
 */
process.on('uncaughtException', (error) => {
    console.error('ERROR!');
    console.log(error);
});

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log('Server started.')
});