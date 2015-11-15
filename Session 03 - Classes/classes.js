var carClass = function (make, model, color) {
    var carMake = make || "Ford";
    var carModel = model || "Model T";
    var carColor = color || "Brown";
    this.setColor = function (color) {
        carColor = color;
    };
    this.getColor = function () {
        return carColor;
    }
    this.getMake = function () {
        return carMake;
    };
    return this;
}


var dennisCar = new carClass("toyota","corolla","red");

console.log(dennisCar.getColor());

dennisCar.setColor("blue");
dennisCar.color = "red";

console.log(dennisCar.getColor());


var kyleighCar = new carClass("ford","focus","yellow");

console.log(kyleighCar.getColor());

kyleighCar.setColor("red");

console.log(kyleighCar.getColor());


var henryCar = new carClass();

console.log(henryCar.getColor());

henryCar.setColor("black");

console.log(henryCar.getColor());