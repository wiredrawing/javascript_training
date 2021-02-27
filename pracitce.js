
var fs = require("fs");


try {
    var promise  = new Promise(function (resolve, reject) {

        resolve(true);

    });

    var res = promise.then(function( data) {
        console.dir(data);
        return data;
    }).then(function (data) {
        if (fs.existsSync("./js.dat")) {
            return true;
        } else {
            return Promise.reject(0);
            return false;
        }
    }).then(function (data) {
        console.dir(data);
    });
    // .catch(function (data) {
    //     console.dir(data);
    //     return ("error");
    // }).then(function (data) {
    //     console.dir("after catch");
    //     console.dir(data);
    // })

} catch (error ) {
    console.dir(error);
}
