const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('\nHello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]

// 1. Find the first person off the people array is teenager (age >=10 and age <=20)
var firstPerson = people.find(function(person) {
    return person.age >= 10 && person.age <= 20
  });
  console.log("First person over 10 and under 20:", firstPerson);

//2. Find the all person of the people array is teenager (age >=10 and age <=20)
  var allTeenAger = people.filter(function(person) {
    return person.age >= 10 && person.age <= 20
  });
  console.log("List all teenagers:", allTeenAger);

  // 3. Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
  var teenAger = people.every(function(person) {
    return person.age >= 10 && person.age <= 20
  });
  
  console.log("All Teenager ?", teenAger);
  
  // 4. Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
  var anyPersonTeen = people.some(function(person) {
    return person.age >= 10 && person.age <= 20;
  });
  
  console.log("Is any person is teenager?", anyPersonTeen);
  
  // // 4. Apply a function against an accumulator and each element in the array using reduce
  // var totalAge = people.reduce(function(accumulator, person) {
  //   return accumulator + person.age;
  // }, 0); // 0 is the initial value of the accumulator
  
  // console.log("Total age of all people:", totalAge);
// Find person with name include 'ae'
// var findName = people.find(function(person){
//   person.name.includes('ae');
// })
// console.log("Person name included 'Michael' :", findName);