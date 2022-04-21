function employee(id, name, department, level, image){
this.employeeId = id,
this.fullName = name,
this.department = department,
this.level = level,
this.imageUrl = image
};


employee.prototype.salary = function() {
    if(this.level === "Senior"){
    return Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500;
    }
    else if(this.level === "Mid-Senior"){
    return Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000;
    }
    else {
    return Math.floor(Math.random() * (1000 - 500 + 1) ) + 500;
    }
    };

    let netSalary = this.salary - (this.salary * .075);
employee.prototype.render = function(){
    console.log(`employee name: ${this.fullName}, net salary ${this.netSalary}`);
}

let ghazi = new employee(1000, "Ghazi Samer", "Administration", "Senior", "/");
let lana = new employee(1001, "Lana Ali", "Finance", "Senior", "/");
let tamara = new employee(1002, "Tamara Ayoub", "Marketing", "Senior", "/");
let safi = new employee(1003, "Safi Walid", "Administration", "Mid-Senior", "/");
let omar = new employee(1004, "Omar Zaid", "Development", "Senior", "/");
let rana = new employee(1005, "Rana Saleh", "Development", "Junior", "/");
let hadi = new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "/");

document.write(`employee name: ${ghazi.fullName}, salary: ${ghazi.salary()}<br>`);
document.write(`employee name: ${lana.fullName}, salary: ${lana.salary()}<br>`);
document.write(`employee name: ${tamara.fullName}, salary: ${tamara.salary()}<br>`);
document.write(`employee name: ${safi.fullName}, salary: ${safi.salary()}<br>`);
document.write(`employee name: ${omar.fullName}, salary: ${omar.salary()}<br>`);
document.write(`employee name: ${rana.fullName}, salary: ${rana.salary()}<br>`);
document.write(`employee name: ${hadi.fullName}, salary: ${hadi.salary()}<br>`);

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();