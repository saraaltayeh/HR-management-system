
let allEmployee = [];
let formEl = document.getElementById('formId');
let sectionEl = document.getElementById("cardSection");

function Employee(id, name, department, level, image){
this.employeeId = id;
this.fullName = name;
this.department = department;
this.level = level;
this.imageUrl = image;
allEmployee.push(this);
};

formEl.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    let newSalary = 0;
    for (i=0; i<newSalary.length;i++){
    if(level === "Senior"){
        newSalary[i] = getRandomInt(1500,2000);
      }
      if(level=== "Mid-Senior"){
        newSalary[i] = getRandomInt(1000,1500);
        }
      if(level=== "Junior"){
        newSalary[i] = getRandomInt(500,1000);
        }
    }
event.preventDefault();
console.log("form event", event);
let newId = Math.floor(1000 + Math.random() * 9000);
let fullname = event.target.fullname.value;
let department = event.target.department.value;
let level = event.target.level.value;
let image = event.target.image.value;

newSalary[i];
// let newSalary = Math.floor(1000 + Math.random() * 9000);
let newEmployee = new Employee(newId, fullname, department, level, image, newSalary)

console.log(newEmployee);

newEmployee.render();
saveData(newEmployee);
}

Employee.prototype.uniqueId = function(){
    return Math.floor(1000 + Math.random() * 9000);
    }

Employee.prototype.render = function(){ 
    let divCard = document.createElement('div');
    sectionEl.appendChild(divCard);

    let imageCard = document.createElement("img");
    imageCard.src = this.imageUrl;
    divCard.appendChild(imageCard);

    let p1 = document.createElement('p');
    p1.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    divCard.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = `Department: ${this.department} - Level: ${this.level}`;
    divCard.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = `${this.salary}`;
    divCard.appendChild(p3);

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


let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/ghazi.jpg");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "./assets/lana.jpg");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/tamara.jpg");
let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./assets/safi.jpg");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "./assets/omar.jpg");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "./assets/rana.jpg");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/hadi.jpg");


renderAll();

function randomSalary(min ,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function renderAll() {
    for (let i=0; i<allEmployee.length; i++){
        allEmployee[i].salary();
        allEmployee[i].render();
        allEmployee[i].uniqueId();
    }
}

function saveData(data){
    let sringifyData = JSON.stringify(data)
localStorage.setItem("employee", sringifyData);

let parseData = localStorage.getItem("employee")
console.log(parseData);
}

function getData(){
let retrieveData = localStorage.getItem("employee");
let arrData = JSON.parse(retrieveData);
console.log(arrData);
}

getData();