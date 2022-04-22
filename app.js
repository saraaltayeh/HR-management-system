allEmployee = [];
function Employee(id, name, department, level, image){
this.employeeId = id;
this.fullName = name;
this.department = department;
this.level = level;
this.imageUrl = image;
allEmployee.push(this);
};


Employee.prototype.salary = function() {
    if(this.level === "Senior"){
    this.salary = randomSalary(2000,1500);
    this.salary = this.salary * (1 - 0.075);
    }
    else if(this.level === "Mid-Senior"){
    this.salary = randomSalary(1500,1000);
this.salary = this.salary * (1 - 0.075);
    }
    else {
    this.salary = randomSalary(1000,500);
    this.salary = this.salary * (1 - 0.075);
    }
    };

Employee.prototype.render = function(){
document.write(`employee name: ${this.fullName}, salary: ${this.salary}<br>`);
}

let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "/");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "/");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "/");
let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "/");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "/");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "/");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "/");


renderAll();

function randomSalary(min ,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function renderAll() {
    for (let i=0; i<allEmployee.length; i++){
        allEmployee[i].salary();
        allEmployee[i].render();
    }
}