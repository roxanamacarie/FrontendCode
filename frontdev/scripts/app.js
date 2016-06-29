var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table class="table table-striped" border="1"><tr><th> First Name </th><th> Last Name</th><th>Phone </th><th> Salary </th><th> View </th><th> Delete </th></tr>';

    for (var i in employeesList) {
        myTable +=
            '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary +'</td><td><button type="button" onclick ="viewalert('+ i+')">View</button></td><td><button type="button" onclick ="deletealert('+ i+')">Delete</button></td></tr>' ;

    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.salary=salary;
}

function newEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName,lastName,phone,salary));
}

function addEmployee(){
    newEmployee();
    showList();
}

function showSalary(){
    
    var sum=0;
    for(var i in employeesList){
        sum += parseFloat(employeesList[i].salary);
    }
    
    var container = document.getElementById('salarycontainer');
    container.textContent= sum;
}

function deleteLastEmployee(){
    employeesList.pop();

    showList();
}

function viewalert(i){
    alert(employeesList[i].firstName+" "+employeesList[i].lastName+" "+employeesList[i].phone+" "+employeesList[i].salary);
    showList();
}

function deletealert(i){
    employeesList.splice(i,1);
    showList();
}

function sort(type) {

   // var type = document.getElementById('sort');
    if(type == 1) {
        employeesList.sort(function (a, b) {
            if (a.firstName < b.firstName) return -1;
            if (a.firstName > b.firstName) return 1;
            return 0;
        })

        showList();
    }
    if(type == 2) {
        employeesList.sort(function (a, b) {
            if (a.lastName < b.lastName) return -1;
            if (a.lastName > b.lastName) return 1;
            return 0;
        })

        showList();
    }
    if(type == 3) {
        employeesList.sort(function (a, b) {
            if (a.phone < b.phone) return -1;
            if (a.phone> b.phone) return 1;
            return 0;
        })

        showList();
    }
    if(type == 4) {
        employeesList.sort(function (a, b) {
            if (a.salary < b.salary) return -1;
            if (a.salary > b.salary) return 1;
            return 0;
        })

        showList();
    }
}