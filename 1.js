// // type person={
// //     name:string,
// //     age:number,
// //     tele:number,
// // }
// // type personTele=Pick<person,'name'|'age'>;
// // const person:personTele={
// //     name:'123',
// //     age:123,
// // }
// type person1 = {
//     name: string,
//     age: number,
//     tele: number
// }
// type personwithoutTele = Omit<person1, 'tele'>;
// const person1: personwithoutTele = {
//     name: '24343',
//     age: 23232,
// }
// const a: number = 1;
// const b: string = '1'
// console.log(a+b);
// console.log(typeof (a+b));
// const num: number = 1;
// const b2: string = '1';
// const result = a.toString() + b;   // 或者 String(a) / `${a}`
// console.log(result);               // "11"
// console.log(typeof result);        // "string"
// console.log(num+b2);
// console.log(typeof (num+b2));
var num = 1;
var b2 = '1';
console.log(num + b2);
console.log(typeof (num + b2));
