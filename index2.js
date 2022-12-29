const Schema = require("./employees_pb");
const fs = require("fs");

// employee data
const JV = new Schema.Employee();
JV.setId(1);
JV.setName("JV");
JV.setSalary(1000);

const Mike = new Schema.Employee();
Mike.setId(2);
Mike.setName("Mike");
Mike.setSalary(2000);

const Rick = new Schema.Employee();
Rick.setId(3);
Rick.setName("JV");
Rick.setSalary(1000);

//adds employees to an array
const employees = new Schema.Employees();
employees.addEmployees(JV);
employees.addEmployees(Mike);
employees.addEmployees(Rick);

// serializes employees data and prints to console
const bytes = employees.serializeBinary();
console.log("binary " + bytes);

//generates a file
fs.writeFileSync("employeesbinary", bytes);

// deserializes employee data and prints to console
const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());
