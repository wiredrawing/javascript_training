function Base() {
    this.a = "a";
    this.b = "b";
}
Base.prototype.aa = function () {
    return this.a;
}
Base.prototype.bb = function () {
    return this.b;
}
Base.prototype.__proto__ = {};

var base = new Base();
console.dir("toString" in base);