// A simple JSON example

const fs = require("fs");

const employees = [];

employees.push({
  name: "JV",
  salary: "1000",
  id: 1,
});

const Mike = {
  name: "Mike",
  salary: 2000,
  id: 2,
};

employees.push(Mike);

employees.push({
  name: "Rick",
  salary: 3000,
  id: 3,
});

fs.writeFileSync("jsondata.json", JSON.stringify(employees));
