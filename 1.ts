// type person={
//     name:string,
//     age:number,
//     tele:number,
// }

// type personTele=Pick<person,'name'|'age'>;
// const person:personTele={
//     name:'123',
//     age:123,
// }
type person1 = {
    name: string,
    age: number,
    tele: number
}
type personwithoutTele = Omit<person1, 'tele'>;
const person1: personwithoutTele = {
    name: '24343',
    age: 23232,
}