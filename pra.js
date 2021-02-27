const { magenta }=require( "color-name" );
const { prototype }=require( "events" );

function Person(name ,age)
{
    this.name = name;
    this.age = age;
}


Person.prototype.getName = function (){
    console.dir("getName");
    // return this.name;
}

Person.prototype.ThisFunctionIsPerson = function () {
    console.dir("This function is person's");
}
console.dir(Person.constructor);
console.dir(Person.prototype.constructor);
console.dir(Person.prototype);

function Man (name , age , address) {
    Person.call(this, name , age);
    this.address = address;
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.ThisFunctionIsMan = function () {
    console.dir("This is function is man's");
}
console.dir(Man.prototype.constructor);
console.dir(Man.constructor);
Man.prototype.constructor = Man;

var man = new Man("senbiki", 38, "小笹");
console.dir(man);
console.dir(Man);

console.dir(man.__proto__);
console.dir(man.constructor);
console.dir(Man.prototype);


// __proto__は､このプロパティのレシーバーオブジェクトの生成に使った､コンストラクタ関数のprototypeを暗黙的に参照する
console.dir(man.constructor.prototype === Man.prototype);
console.dir(man.__proto__ === Man.prototype);

Man.prototype.show = function () {
    console.dir(this.constructor);
}
var man2 = new Man.prototype.constructor("akifumi", 38, "小笹");
console.dir(man2);

console.dir(Man === Man.prototype.constructor);
console.dir(Man.constructor);
console.dir(Man.constructor === Function);
console.dir(Function.constructor === Function.prototype.constructor);
console.dir(Person.constructor === Person.prototype.constructor);
console.dir(Function.prototype.__proto__ === Object.prototype);
console.dir(Function.prototype.__proto__.constructor === Object.prototype.constructor);
console.dir(Object.constructor === Object.prototype.constructor);
console.dir(Object.constructor);
console.dir(man2.constructor === Man);
console.dir(man2.constructor === Man.prototype.constructor);
console.dir(man2);
console.dir(man2.__proto__.constructor === Man.prototype.constructor);

// obj.constructor はレシーバーオブジェクトの生成に使用したコンストラクタ関数を保持する
console.dir(man2.constructor); // [Function: Man]
console.dir(Man.constructor);
console.dir(Man.prototype.constructor);

function Machine ()
{
    console.dir("This is machine");
}
console.dir(Machine.prototype.constructor);
console.dir(Machine.constructor);
console.dir(Machine.__proto__  === Function.prototype);
console.dir((Function.prototype).__proto__ === Object.prototype)
console.dir("getNa_me" in man2);