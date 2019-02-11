function Employee(Name, JobTitle, Salary) {
    this.name = Name;
    this.jobTitle = JobTitle;
    this.salary = Salary;
    this.status = "FullTime";
    //this.employeesForm = []
    this.form = function () {
        return this.name+ " " + this.jobTitle  + " " + this.salary + " " + this.status
    }
    
}
var me = new Employee("pauline", "student", "$1/day")
var you = new Employee("nico", "student", "$2/day")
var them = new Employee("john", "stylist", "$3/hour")

var employ = []
employ.push(me, you,them)
// me.status ="parttime"
// you.name = "paul"

console.log(employ)
 
 
// console.log(me.form());
// console.log(you.form());
// console.log(them.form());




