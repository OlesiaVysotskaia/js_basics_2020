function sayHelloToConsole() {
  console.log('Hello!')
}

sayHelloToConsole()

function sayHello(name = 'незнакомец') {
  // if (name === undefined) {
  //   name = 'незнакомец'
  // }
  // name = name || 'незнакомец'
  alert('Hello ' + name + '!')
}

// sayHello()

let adminName = 'Иннокентий'

function logUser() {
  let userName = 'Вася Пупкин'
  console.log(userName)
  console.log(adminName);
}

logUser()
// console.log(userName);
console.log(adminName);

function getName() {
  let myName = 'Олеся'
  return myName
}

let user = getName()
console.log(user)
//
// function makeCoffee(cups, withMilk) {
//   if (withMilk){
//     return console.log('Варю ' + cups + ' кофе с молоком')
//   }
//   return console.log('Варю ' + cups + ' кофе без добавок')
// }
//
// makeCoffee(24,false)
// makeCoffee(3,true)
// makeCoffee(8)

function findMax(a,b) {

    if (a === b) {
      return 'Равны';
    }

  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(findMax(4,3));

function showQuote(text, author) {
  if (!text) {
    return
  }
  if (author === undefined) {
    author = author || 'Неизвестный автор'
  }
  console.log(text + author);
}

console.log("***");
showQuote()
console.log("***");

showQuote('Кто понял, тот поймет ')


function addOne(a) {
  return a + 1;
}

 let x = addOne(8)
 console.log(x);



 function nextEven(num) {
   if (num % 2 === 0) {
     return num + 2
   }
     return num + 1
 }


 console.log(nextEven(11));

 nextEven(11)
 nextEven(24)
