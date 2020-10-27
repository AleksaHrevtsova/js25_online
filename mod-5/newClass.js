// GrandPa
class User {
  constructor(name = "name", email = "email", phone = "phone", password = "password"){
    this.name = name;
    this.email= email;
    this.phone= phone;
    this.password= password;
  }
  toShowName(){
    // console.log(this.name)
    return this.name;
  }
}
const myUser = new User(undefined, "dd@com", undefined, 'sss')
console.log(myUser)

// Father
class SuperUser extends User {
  constructor(name = "superName", email, phone="000", nickName= "nickName", confirm="confirm"){
    super(name, email, phone)
    this.nickName = nickName;
    this.confirm = confirm;
    //
  }
  toGetPhone(){
    return this.phone
  }
}

const mySuperUser = new SuperUser("GodFather", undefined, "111", 'Nick', true)
console.log(mySuperUser)

console.log(mySuperUser.toShowName())

// Son
class NewSU extends SuperUser {
  constructor(name, skills){
    super(name)
    this.skills = skills
  }
  toSetEmail(email){
    return this.email = email
  }
}
const myNewSU = new NewSU("SOn",['html', 'css'])
console.log(myNewSU)
console.log(myNewSU.toShowName())

// console.log(myUser.toSetEmail("aa@jj"))

// for (let prop in myNewSU){
//   console.log(prop)
// }
// console.log(myNewSU.hasOwnProperty())