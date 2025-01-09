let person = {
  name: "Abhshek",
  age: 28,
};
//update the age value
person.age = 30;
console.log(person.age);

// adding new key value pair inside the person Object
person.depat = "IT";
console.log(person);

// delete the depat inside the person Object
delete person.depat;
console.log(person);
