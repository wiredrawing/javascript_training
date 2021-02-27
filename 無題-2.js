const { DirectiveLocation }=require( "graphql" );

function Base()
{
    // インスタンス化に使ったコンストラクタ名
    this.name = this.constructor.name;
}

Base.prototype.method = function () {
    console.dir("プロトタイプメソッド");
}
Base.prototype.property = "プロトタイプメンバ";


function inherit(prototype) {
    function F () {}
    F.prototype = prototype;
    var f = new F();
    // f.__proto__ プロトタイプチェーン用のプロトタイプオブジェクトを持つ
    return f;
}

function Derived () {
    Base.call(this);
    console.dir(this);
}
var middle = inherit(Base.prototype);
// middle => { __proto__: Base.prototype }
Derived.prototype = middle;
Derived.prototype.constructor = Derived;
/*
Derived.prototype => {
    __proto__: Base.prototype,
    constructor: Derived,
}
*/

var derived = new Derived ();
/*
    derived = {
        __proto__: {
            __proto__: {

            }
        }
    }
*/

console.dir(derived.hasOwnProperty("name"));
console.dir(derived.__proto__ === Derived.prototype);
console.dir(derived.__proto__.__proto__ === Base.prototype);
for (var key in derived) {
    if (derived.hasOwnProperty(key)) {
        console.dir(key);
    }
}