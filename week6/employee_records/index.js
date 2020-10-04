// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// Name
// Job title
// Salary
// Status
// First, you will create an array named employees.

// Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

// This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

// (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

// You will then:

// Instantiate three employees
// Override the status attribute of one of them to either "Part Time" or "Contract"
// Call the printEmployeeForm method for each employee
// Put the generated employees into the employees array using whichever method you prefer.
// Here's a refresher for the constructor syntax:


function Employed(name, jobtitle, salary, status) {
    const employees = [];
            this.name = name;
            this.jobtitle = jobtitle;
            this.salary = salary;
            this.status = status;
            this.printEmployeeForm = function(){
                console.log()
        
            }
}

var employee1 = new Employed("Bob", "Manager", 7000);
var employee2 = new Employed("Mary", "Sales Manager", 5000);
var employee3 = new Employed("Steve", "Assistant Manager", 4000);

console.log(employee1, employee2, employee3) 

