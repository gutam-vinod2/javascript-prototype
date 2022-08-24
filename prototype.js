function person () {
    this.Name = 'vinod';
    this.age = 23
}
// creating object
const person1 = new person ();
const person2 = new person ();

person.prototype.gender = "male"
person.prototype.Name    =  "vinod"
person.prototype.age  ='23'

console.log(person.prototype.gender)
console.log(person.prototype.Name)
console.log(person.prototype.age)