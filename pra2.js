


// 人間クラス
function Person (defaultAge = 1000) {
    var age = defaultAge;
    this.name = "";
    this.setAge = function (_age) {
        age = _age;
    };
    this.getAge = function () {
        return age;
    }
}

// 継承させたい､メソッド郡
Person.prototype.setName = function (name ){
    this.name = name;
};
Person.prototype.getName = function () {
    return this.name;
}

console.dir(Person.prototype);
Object.defineProperty(Person.prototype, 'setName', {
    value: function (name ){
        this.name = name;
    },
    enumerable: false, // 'for in'ループで現れないようにする
    writable: true });
Object.defineProperty(Person.prototype, 'getName', {
    value: getName = function () {
        return this.name;
    },
    enumerable: false, // 'for in'ループで現れないようにする
    writable: true });
console.dir(Person.prototype);
console.dir("setName" in Person.prototype);
console.dir("getName" in Person.prototype);

var proto = Object.create(Person.prototype);
console.dir(Object.getPrototypeOf(proto) === Person.prototype);
console.dir("---------------------------------->");

// 職業クラスを定義
function Teacher  () {
    Person.call(this);
}

console.dir("Object.createとprototypeの違い");
console.dir(Object.create(Person.prototype) === Person.prototype);
console.dir(Person.prototype);
console.dir("getName" in Object.create(Person.prototype));
Teacher.prototype = Person.prototype;
Teacher.prototype.constructor = Teacher;

var teacher = new Teacher ();
console.dir(teacher);

console.dir("setName" in teacher);
console.dir(teacher instanceof Person);
// console.dir(Person.prototype.constructor === Person);

// var obj = new Person();
// console.dir(obj);
// console.dir("setName" in obj.__proto__);
// console.dir(obj.__proto__.getName.call(obj));
// console.dir(obj);
// console.dir(obj.getAge());
// obj.setAge (38);
// console.dir(obj.getAge());
// console.dir(obj);
// obj.setAge ( 19);
// console.dir(obj.getAge());

// console.dir(obj.constructor);
// console.dir(new obj.constructor());

console.dir("==================================================");

function Parent ()
{
    console.dir("親クラス");
}


Parent.prototype.age = 30;
Parent.prototype.getAge = function () {
    console.dir(this.age);
    return (this.age);
}

function Child() {
    console.dir("子供クラス");
}
var proto = Object.create(Parent.prototype);
var proto2 = new Parent();
console.dir(Parent.prototype === proto2 . __proto__);
console.dir(proto instanceof Parent);
console.dir("greet" in proto);
Parent.prototype.greet = function() {
    console.dir("挨拶");
}

console.dir("greet" in proto);
console.dir(proto2);
proto2.addFunction = function () {
    console.dir("インスタンスプロパティの追加");
}
Child.prototype = proto2;
Child.prototype.constructor = Child;

console.dir("===");
console.dir(Child.prototype.__proto__ === Parent.prototype);
console.dir("===");
// console.dir("!!!");
// console.dir(proto.__proto__ === Parent.prototype);

var child = new Child();
// child.greet();
// child.getAge();
console.dir(child instanceof Parent);
console.dir(child instanceof Child);
console.dir(child);
function Dummy () {

}
Dummy.prototype = proto2
console.dir(child instanceof Dummy);
// console.dir(child.constructor.name);

// var EventEmitter = require("events").EventEmitter;

// function MyClass() {
//     EventEmitter.call(this);
// }

// MyClass.prototype = Object.create(EventEmitter.prototype);

// MyClass.prototype.doSomething = function(data) {
//     this.emit("doSomething", data);
// }
// MyClass.prototype.constructor = MyClass;





var util = require("util");
var EventEmitter = require("events").EventEmitter;

function MyClass() {
    EventEmitter.call(this);
}

util.inherits(MyClass, EventEmitter);

MyClass.prototype.doSomething = function(data) {
    this.emit("doSomething", data);
}

var event = new MyClass();
console.dir(MyClass.prototype.constructor.name);
console.dir(event.constructor.name);