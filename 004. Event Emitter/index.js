const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// initialize object
const myEmitter = new MyEmitter();
// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // Emit Event
    myEmitter.emit('log', 'log event emitted!');
}, 2000);
