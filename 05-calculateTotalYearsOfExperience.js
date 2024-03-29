// Create a function that takes in an array of employee objects.
// Each employee object will look something like this:
// { name: "Tony", yearsOfExperience: 10 }
// Your function should return the total years of experience for all of the employees.

// Examples:

// let employees = [
//   { name: "Tony", yearsOfExperience: 10 }, 
//   { name: "Carla", yearsOfExperience: 4 }
// ]
//
// calculateTotalYearsOfExperience(employees)
//     should evaluate to 14


function calculateTotalYearsOfExperience(employeeArray) {
  let yearsOfExperience = 0;
  for (let employee of employeeArray) {
    yearsOfExperience += employee.yearsOfExperience
  }
  return yearsOfExperience;
}

try {
  module.exports = calculateTotalYearsOfExperience;
} catch (err) {
  // do nothing...
}
