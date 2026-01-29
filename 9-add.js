// function add(a, b) {
//   return a + b;
// }

// const a = parseInt(process.argv[2]);
// const b = parseInt(process.argv[3]);

// console.log(add(a, b));

// let loggedIn = false
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt('Enter username');
//   password = window.prompt('Enter your password');
//   if (username=== 'myname' && password === 'mypassword') {
//     loggedIn = true;
//     console.log("you're looged in");
//   }else {
//     console.log('invalid credentials')
//   }

// const function1= function(david) {
// console.log(`my name is ${david}`);
// }
// function1('david');

// let email = 'abiadavid534@gmail.com'
// console.log(email.replace('a', 'i'))

// const myFunc = (callbackFunc) => {
//   let value = 50 
//   callbackFunc(value)
// } 
// myFunc(function(value){
//   console.log(value)
// })

// const mynewFunc = (myfunc) => {
//   let result1 = 'david'
//   result2 = 'abia'
//   myfunc(result1, result2)
// }

// mynewFunc(function(result1, result2){
//   console.log(result1, result2)
// })

// const calback = (myfunc) => {
//   let call = 2 * 2;
//   myfunc(call)
// }

// calback(function(call) {
//   console.log(call)
// })


// const ul = document.querySelector('.people');
// const people = ['David', 'James', 'Jacob', 'Joseph', 'Daniel'];
// let html =``;
// people.forEach(person => {
//   html += `<li style="color:blue">${person}</li>`;
// });
// console.log(html);
// ul.innerHTML =html

const ul = document.querySelector('.people');
const scores = [20, 0, 40, 50, 60, 100];
let html = ``;
scores.forEach(person => {
  html += `<li style ="color:red; font-size:50px"> you score:${person}</li>`
});

ul.innerHTML = html
console.log(html)

