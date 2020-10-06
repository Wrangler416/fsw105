const employees = [];

function Employed(name, jobtitle, salary, status) {
            this.name = name;
            this.jobtitle = jobtitle;
            this.salary = salary;
            this.status = status;
            this.printEmployeeForm = function() {return this.name + " " + this.jobtitle + " " + this.salary + " " + this.status}   
}
var employee1 = new Employed("Bob", "Manager", 7000, "Full-Time");
var employee2 = new Employed("Mary", "Sales Manager", 5000, "Full-Time");
var employee3 = new Employed("Steve", "Assistant Manager", 4000, "Full-Time");

employee1.status = "Part-Time"

console.log(employee1.printEmployeeForm());
console.log(employee2.printEmployeeForm());
console.log(employee3.printEmployeeForm()); 