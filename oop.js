const name1 = "Sandra"
const name2 = "Ivan"

const age = 30

const skills = ['html', 'css', 'js']

const hobbies = {
  a: 'ggg',
  b: 'bbb',
  c: 'dad'
}

function togetName(name){
  return name
}
// console.log(togetName(name1))
// console.log(togetName(name2))

const user = {
  name: "Sandra",
  1: 1,
  age: 30,
  skills: ['html', 'css', 'js'],
  hobbies:{
    a: 'ggg',
    b: 'bbb',
    c: 'dad'
  },
// es5
getName: function(){
    console.log(`${this.name}`)
  },

// es6
  getName(){
    console.log(this.name)
  },
}
// user.getName()
// console.log(user.name)
// console.log(user['name'])
// console.log(user[1])



// функция-конструктор es5
const User = function(name = 'gggg'){
  this.name = name
  this.age = 1
  this.phone = 'd'
  this.email= 'd'
// // ТАК НЕЛЬЗЯ ДЕЛАТЬ!!!
//   this.toSayHello = function(){
//     console.log(`Hello Function`)
//   }
}
// А НАДО ВОТ ТАК [[prototype]]
User.prototype.toSayHello = function(){
  //
  //
  //
  //
  console.log(`Hello Function`)
}
User.prototype.toSayBye = function(){
  console.log(`Bye Function`)
}

const myUser = new User('Belka')
console.log(myUser)
myUser.toSayHello()

const myNewUser = new User('Strelka')
console.log(myNewUser)

// console.dir(Function)
// const func = function alpha(a, b, c){
//   console.log(arguments)
//   // console.log(args)
//   console.log(`${this.name}, бобро поржаловать, вам начислено ${a} бонусов, ${b} бонусов, ${c} бонусов)`)
// }
// func.call(myUser, 33, 22, 11)
// func.apply(myUser, [33, 22, 11])
// // console.log(func)
// const arr = [1, 3, 5]
// func.apply(myUser, arr)