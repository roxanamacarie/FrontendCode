hrApp.factory('employeeActionsService', function () {

   var employeeMenu = 
       [{
            label: "Employee list",
            url: "#/employeeslist"
        },
        {
            label: "Add employee",
            url: "#/employeeadd"
        }];

    return employeeMenu;
});