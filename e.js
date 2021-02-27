


var event = require("events").EventEmitter;

var e = new event();


console.dir(e);

e.on("my-event", function () {
    console.dir(this);
});

e.emit("my-emit").call({});