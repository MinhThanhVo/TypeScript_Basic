// let messenger: string = "Hello World !!!";
// console.log(messenger);
/**
 * Type Number
 *
 * */
// const sum = (x: number, y: number) => {
//   return x + y;
// };
// console.log("Check sum :", sum(5, 10));
/**
 * Type String
 */
// let firstName: string = "Minh Thanh '09 / 09'";
// let doubleName: string = `"Minh Thanh" 09 - 09`;
// let lastName: string = "Vo";
// console.log("Check name = ", lastName + " " + doubleName);
/**
 * Type Array
 */
// let names: string[] = [];
// //let names: readonly string[] = [];
// names.push("Thanh", " Minh", "Nhat");
// console.log("Check name = ", names[2]);
/**
 * Synthetic
 */
// let output: readonly [number, string, boolean];
// output = [99, "Minh Thanh", true];
// //output.push("Xin chao Minh Thanh");
// console.log("Check output >>> ", output);
/**
 * Destructring Tuples
 */
// let graph: [number, number] = [44.5, 55.4];
// let [y, x] = graph;
// console.log("Check output >>> ", x);
/**
 * Array in typescript
 */
var car = {
    type: "Trang",
};
car.model = "The thao";
car.year = 2023;
console.log("Check output >>>", car);
//console.log("Check type >>> ", typeof car);
/**
 * TypeScript Enums
 */
var Color_Car;
(function (Color_Car) {
    Color_Car[Color_Car["White"] = 0] = "White";
    Color_Car[Color_Car["Red"] = 1] = "Red";
    Color_Car[Color_Car["Blue"] = 2] = "Blue";
    Color_Car[Color_Car["Green"] = 3] = "Green";
})(Color_Car || (Color_Car = {}));
var Color = Color_Car.White;
console.log(Color);
