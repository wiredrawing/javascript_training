

// 継承させたいオブジェクトを引数に渡す
function MakeDerivedObject(prototype) {
    function Temp () {}
    Temp.prototype = prototype;
    var temp = new Temp();
    return temp;
}


// 規定クラス
function Base(version, type) {
    this.version = version;
    this.type = type;
    // コンストラクタ関数内で､独自メソッドを定義
    this.getObjectName = function () {
        return (this.constructor.name);
    }
};
Base.prototype.getVersion = function () {
    return (this.version);
}
Base.prototype.getType = function () {
    return (this.type);
}
Base.prototype.version = "-";

// 派生クラス
function Derived(version, type) {
    Base.call(this, version, type);
}
var middleObject = MakeDerivedObject(Base.prototype);
Derived.prototype = middleObject;
Derived.prototype.originalMethod = function () {
    console.dir("派生クラス独自のメソッド");
}
// Derived.prototype.constructor = Derived;
var derived = new Derived("1.0", "サブクラス");
console.dir(derived.constructor)
console.dir(derived instanceof Base);
console.dir(derived instanceof Derived);
delete derived.version;
console.dir(derived.version)
console.dir("getObjectName" in derived);
console.dir(derived.getObjectName());
console.dir(derived)


var _proto = {
    a: "単体プロトタイプ",
}

function Unit(){ }
Unit.prototype = _proto;
Unit.prototype.constructor = Unit;
var unit = new Unit();
console.dir(unit instanceof Unit);
console.dir(_proto.isPrototypeOf(unit));
console.dir(Object.prototype.isPrototypeOf(unit));
console.dir(unit instanceof Object);