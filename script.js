const employees = [
    {name: 'John', position: 'Manager', salary: 5000},
    {name: 'Alice', position: 'Developer', salary: 4000},
    {name: 'Bob', position: 'Designer', salary: 3500}
];

// const result = [];
//
// for ( i = 0; i< employees.length; i++) {
//     result[i] = employees[i].salary;
// }
// console.log(result);
// console.log(typeof result);

const salary = employees.map(x => x.salary);
console.log(`Employee salaries: ${salary}`);
console.log(typeof salary)


// console.log(typeof employees)
// const {employees: {salary}} = employees;

// console.log(salary);
// console.log(Object.keys(employees).length);
// const {name, position, salary} = employees;
// console.log(employees["Salary"]['salary']);
// console.log(position);
// console.log(salary);

// let counter = 0;
//
//
// for (let key in employees) {
//     if (typeof (employees[key]) === 'object') {
//         for (let i in employees [key]) {
//             console.log(`${i} has ${employees[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`${key} has ${employees[key]}`);
//         counter++;
//     }
//     // console.log(`${key } has ${employees[key]}`) ;
// }
// console.log(counter);