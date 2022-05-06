let allEmployee = [];
let formEl = document.getElementById('formId');
let sectionEl = document.getElementById("cardSection");

function Employee(id, name, department, level, image) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    allEmployee.push(this);
};


Employee.prototype.uniqueId = function () {
    return Math.floor(1000 + Math.random() * 9000);
}

Employee.prototype.render = function () {
    let divCard = document.createElement('div');
    sectionEl.appendChild(divCard);

    let imageCard = document.createElement("img");
    imageCard.src = this.image;
    divCard.appendChild(imageCard);

    let p1 = document.createElement('p');
    p1.textContent = `Name: ${this.name} - ID: ${this.id}`;
    divCard.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = `Department: ${this.department} - Level: ${this.level}`;
    divCard.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = `${this.salary}`;
    divCard.appendChild(p3);

}

Employee.prototype.monthSalary = function () {
    if (this.level === "Senior") {
        this.salary = randomSalary(2000, 1500);
        this.salary = this.salary * (1 - 0.075);
    } else if (this.level === "Mid-Senior") {
        this.salary = randomSalary(1500, 1000);
        this.salary = this.salary * (1 - 0.075);

    } else {
        this.salary = randomSalary(1000, 500);
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



function randomSalary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderAll() {
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].monthSalary();
        allEmployee[i].render();
        allEmployee[i].uniqueId();
    }
}

formEl.addEventListener("submit", handleSubmit);

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