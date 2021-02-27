
var axios = require("axios");

var fs = require("fs");


console.dir(axios);


// サーバーサイド axios
axios.get("http://localhost:8000/form").then(function (response) {
    console.dir(response.data);
    return response. data;
}).then(function (data) {
    console.dir(data);
    return data;
}).then(function (data) {
    // console.dir(fs);
    fs.createWriteStream("./node.dat", function (data) {
        fs.open(data, function () {

        })
    });
    // fs.open("./node.dat", function (data) {
    //     console.dir(data);
    // });
});
// var p = new Promise (function (resolve, reject) {

//     setTimeout(function () {
//         // resolve("ok");
//         console.dir("30秒経過");
//     }, 30000)

//     var count = 0;
//     setInterval(function () {
//         count++;
//         console.dir(count + "秒後");
//         if (count > 40) {
//             reject(false);
//         }
//     },1000);
// });


// p.then(function ( data ) {
//     console.dir(data);
//     console.dir(1);
//     return data + data;
// }).then(function ( data ) {
//     console.dir(data);
//     console.dir(1);
//     return data + data + data;
// }).then(function ( data ) {
//     console.dir(data);
//     console.dir(1);
//     return data + data + data + data;
// }).catch(function ( data ) {
//     console.dir(data);
//     console.dir(1);
//     return data + data + data + data + data;
// });
