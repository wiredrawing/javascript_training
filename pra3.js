const { arrayParser }=require( "pg-types" );
// const { EventEmitter }=require( "ws" );
var fs = require("fs");
var EventEmitter = require("events");
console.dir(EventEmitter);

function Person(name)
{
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}
Person.prototype.setName = function (name) {
    this.name = name;
    return this.name;
}

function inherit(constructor, prototype) {
    function F() {};
    F.prototype = prototype;
    // F.prototype.constructor = F;
    var f = new F();
    return (f);
}

var prototype = Person.prototype;
var prototype = {
    getName : function() {

    },
    setName: function () {

    },
    constructor: function FF() {},
};
var base = inherit(Person, prototype);
console.dir(base);
console.dir(base.constructor);
console.dir(base.__proto__.constructor);
console.dir(base instanceof Person);

function Child () {

}
Child.prototype = base;
Child.prototype.constructor = null;
var child = new Child();
console.dir(child instanceof Child);
console.dir(child instanceof Person);



var original = {
    a : "A",
    b: "B",
}

function Base () {}
Base.prototype = original;
var ori = new Base();
console.dir(ori instanceof Base);
function A () {

}
A.prototype = original;
console.dir(A.prototype === Base.prototype);

console.dir(ori instanceof A);
// console.dir(child.constructor.name);
// console.dir(Person.prototype.constructor);
// console.dir(Person.prototype);
// console.dir("constructor" in Person.prototype);

// var protoType = Person.prototype;
// console.dir(protoType);
// console.dir(protoType.constructor);

// function F() {}
// F.prototype = protoType;
// console.dir(F.prototype);
// console.dir(F.prototype === Person.prototype)
// // F.prototype.constructor = F;
// console.dir(F.prototype.constructor);
// var f = new F();

// console.dir(f instanceof Person);
// console.dir(f.constructor);
console.dir("-00000000000000000000000000000000000000!);");

function C() {

}
function A() {

}
A.prototype.getA = function() {
    console.dir("a");
}

function B() {

}
var proto = A.prototype;
proto.constructor = C;
B.prototype = proto;
var b = new B();
console.dir(b instanceof A);


var newArray = new Array();
function CustomArray() {
    Array.call(this);
    console.dir(this.constructor.name);
};
CustomArray.prototype = newArray;

var arr = new CustomArray();
console.dir(arr);
console.dir("push" in arr);
arr.push("あ");
console.dir(arr[0]);

function NewEventEmitter() {
    EventEmitter.call(this);
    console.dir(this.constructor.name);
}

NewEventEmitter.prototype = Object.create(EventEmitter.prototype);
NewEventEmitter.prototype.makeNewFile = function () {
    var self = this;
    fs.writeFile("new.dat", "これはEventEmitterクラスを継承したオブエクとのインスタンスメソッドだる", function (error) {
        if (error !== null) {
            throw error;
        }
        console.dir("ファイル作成後イベント発火");
        self.emit("completedMakingNewFile", self);
    });
}
var event = new NewEventEmitter();
console.dir(event);
console.dir("once" in event);
console.dir("on" in event);
event.on("completedMakingNewFile", function (data) {
    console.dir(data);
})
event.makeNewFile();