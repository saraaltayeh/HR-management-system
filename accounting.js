let tableEl = document.getElementById("tableId");
let allEmployee = [];

function Employee(department, total, totalSalary, averge){
    this.department = department;
    this.employeesNum = total;
    this.totalSalary = totalSalary;
    this.avgSalary = averge;

    allEmployee.push(this);
    };

Employee.prototype.renderTable = function(){ 
    let tr = document.createElement('tr');
    tableEl.appendChild(tr);

    let departmentName = document.createElement("th");
    departmentName.textContent = this.department;
    tr.appendChild(departmentName);

    let employeesNum = document.createElement("th");
    employeesNum.textContent = this.employeesNum;
    tr.appendChild(employeesNum);

    let totalSalary = document.createElement("th");
    totalSalary.textContent = this.totalSalary;
    tr.appendChild(totalSalary);

    let avgSalary = document.createElement("th");
    avgSalary.textContent = this.avgSalary;
    tr.appendChild(avgSalary);

}

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

    function avgSalary() {
        let newSalary = 0;
        let avg = 0;
        for (let i = 0; i < allEmployee.length; i++) {
            newSalary += this.salary;
        }
        avg = newSalary/allEmployee.length;
        return avg;
        }

let ghazi = new Employee("Administration", 1, 400, 300);
let lana = new Employee("Marketing", 2, 400,350);
let tamara = new Employee("Administration", 3, 300,450 );
let safi = new Employee("Mid-Senior", 4, 300,350 );
let omar = new Employee( "Development", 5, 300, 500);
let rana = new Employee("Development", 6, 200,550);
let hadi = new Employee("Finance", 7, 500,600);


function randomSalary(min ,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function renderAll() {
    for (let i=0; i<allEmployee.length; i++){
        allEmployee[i].renderTable();
    }
}
renderAll();

function handleSubmit(event) {
    event.preventDefault();

    console.log("form event", event);
    let newId = Math.floor(1000 + Math.random() * 9000);
    let name = event.target.name.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let newEmployee = new Employee(newId, name, department, level, image)

    console.log(newEmployee);
    newEmployee.monthSalary();
    newEmployee.render();
    saveData(newEmployee);
}

function saveData(data) {
    let localData = JSON.parse(localStorage.getItem('employees'));
    if (localData != null) {
        localData.push(data);
        localStorage.setItem('employees', JSON.stringify(localData));
    } else {
        localStorage.setItem('employees', JSON.stringify([data]));
    }
}
// console.log("before saving to ls", newEmployee);

function getData() {
    let retrieveData = localStorage.getItem("employees");
    let arrData = JSON.parse(retrieveData);
    // console.log(arrData);

    if (arrData != null) {
        for (let i = 0; i < arrData.length; i++) {
            new Employee(arrData[i].id, arrData[i].name, arrData[i].department, arrData[i].level, arrData[i].image);
        }
    }

    renderAll();
}

getData();