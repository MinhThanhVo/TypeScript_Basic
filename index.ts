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
// let car: { type: string; model?: string; year?: number } = {
//   type: "Trang",
// };
// car.model = "The thao";
// car.year = 2023;
// console.log("Check output >>>", car);
//console.log("Check type >>> ", typeof car);
/**
 * TypeScript Enums
 */
// enum status_file {
//   NotFound = 404,
//   Success = 202,
//   Accepted = 202,
//   BadRequest = 400,
// }
// let R_status_file = status_file.Success;
// console.log("Check color >>>", R_status_file);
/**
 * TypeScript Aliases & Interfaces
 */
// type Caryear = number;
// type Carcolor = string;
// type Carmodel = string;
// type Car = {
//   year: Caryear;
//   color: Carcolor;
//   model: Carmodel;
// };
// let CarYear: Caryear = 2023;
// let CarColor: Carcolor = "White";
// let CarModel: Carmodel = "Sport";
// let car: Car = {
//   year: CarYear,
//   color: CarColor,
//   model: CarModel,
// };
// console.log("Check output >>>", car);
/// Interface
interface Rectangle {
  height: number;
  width: number;
}
interface Rectanglescolor extends Rectangle {
  color: string;
}
const rectangles: Rectanglescolor = {
  height: 20,
  width: 20,
  color: "Red",
};
console.log("Check output >>>", rectangles);
