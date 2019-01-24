import { IncomingMessage, ServerResponse } from "http";
import {port} from './config';
import Counter from './counter.model'

let counter = new Counter();

function requestHandler(request: IncomingMessage, response: ServerResponse) {
    console.log(request.url);
    response.end(`Hello World on port ${port}, you tail. Handled requests:  ${counter.count}`);
    counter.inc();
}

export default requestHandler