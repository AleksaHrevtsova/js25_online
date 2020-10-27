const user = {
  name: "Sandra",
  email: "sandra@gmail.com",
  phone: "+380501112233",
  password: 'qwe123'
}
let a = 'Dasha'
let b = "Dasha@gmail.com"
let c ="+380501112233"
let d = 'ggg333'

class User {
  static staticProperty = 'static prop'
  static staticMethod(){}
  
  constructor(a = "user", b, c = "", d){
    this.name = a;
    this.email= b;
    this.phone= c;
    this._password= d;
  }
  // toShowPassword(){
  //   // console.log(this.name)
  //   return this.password;
  // }

  // ГЕТТЕР
  get password(){
    return this._password;
  }
  // СЕТТЕР
  set password(value){
    return this._password = value
  }

  // toSetPassword(value){
  //   return this.password = value
  // }
}

console.dir(User)

const myUser = new User(a, b, c, d)
console.log(myUser)
// обращение к свойству
console.log(myUser._password)
// вызов геттера
console.log(myUser.password)

// обращение к свойству
console.log(myUser._password = "new password")
// вызов сеттера
console.log(myUser.password = "set new password")

const myNewUser = new User(undefined, "a@gmail.com", undefined, "hhh222")
console.log(myNewUser)

// myUser.toShowName()
// myNewUser.toShowName()

// console.log(myUser.toSetPassword())
// console.log(myNewUser.toSetPassword())