

var p = new Promise(function (resolve) {

    setTimeout(function () {
        console.dir("setTimeout");
        resolve(1000);
    }, 10000);
});


p.then(function (data) {
    console.dir(data);
}).catch (function (data) {
    console.dir(data);
});