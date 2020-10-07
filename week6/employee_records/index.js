const employees = [];

function Employed(name, jobtitle, salary, status="Full-Time") {
            this.name = name;
            this.jobtitle = jobtitle;
            this.salary = salary;
            this.status = status;
            this.printEmployeeForm = function() {return this.name + " " + this.jobtitle + " " + this.salary + " " + this.status}   
}
var employee1 = new Employed("Bob", "Manager", 7000);
var employee2 = new Employed("Mary", "Sales Manager", 5000);
var employee3 = new Employed("Steve", "Assistant Manager", 4000);

employee1.status = "Part-Time"

let toArray = employee1.printEmployeeForm() + " " + employee2.printEmployeeForm() + " " + employee3.printEmployeeForm();

employees.push(toArray);
console.log(employees)
