// // const mysym=Symbol["key1"];
// // const nomi={
// //     name:"noman",
// //     age:20,
// //     islogged:true,
// //     [mysym]:"mykey1"
// // };
// // console.log(nomi["name"]);
// // console.log(nomi[mysym]);
// // nomi.greeting=function(){
// //     console.log('hello js user',this.name);
// // }
// // console.log(nomi.greeting());

// // function addtwo(...num1) {
// //     return num1;
// // }

// // console.log(addtwo(3, 4, 5, 6, 7, 8));
// ((name) => {
//     console.log(`Welcome ${name}`);
// })('nomi');
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);