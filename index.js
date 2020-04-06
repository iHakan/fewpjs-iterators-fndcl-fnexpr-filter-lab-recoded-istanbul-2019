// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
  
  let newDriver = drivers.filter(function(arr){
    return arr === string;
  })
}