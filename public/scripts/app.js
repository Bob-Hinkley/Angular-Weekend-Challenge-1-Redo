var app = angular.module('salaryCalc', []);
app.controller('CalcController', function (){
  console.log('CalcController loaded')

var calc = this;
calc.employee = [];
calc.totalSal = 0;

calc.addEmployee = function(firstName, lastName, id, salary, title) {
  calc.employee.push({FirstName: firstName, LastName: lastName, ID: id, AnnualSalary: salary, JobTitle: title})

  console.log('Employee', calc.employee);
  // calc.totalSal = 0;
  calc.totalSal += Number(((calc.employee.salary)/12).toFixed(2));
  console.log('Total Salary', calc.totalSal);
};


calc.delEmployee = function (index) {
  calc.totalSal[0] -= calc.employee[index]['AnnualSalary'];
  calc.employee.splice(index, 1);
  calc.monthlyExpenditures = [(calc.totalSal[0] / 12).toFixed(2)];
}




// var totalSal = 0;
// totalSal += calc.employee.salary
// appendMonthSal();

// function appendMonthSal(salEmp){
//     $('#expend').text("Monthly Salary Expenditure: $" + ( parseFloat(salEmp)/12).toFixed(2));
// };

})


// $(function () {
//   console.log('document is ready');
//
//   var totalSal = 0;
//
//   $('form').on('submit', function (event) {
//     console.log('form submitted');
//
//     event.preventDefault();
//
//     var formData = {};
//     var formAsArray = $(this).serializeArray();
//
//     formAsArray.forEach(function (input) {
//       formData[input.name] = input.value;
//     });
//
//     appendDom(formData);
//
//     totalSal += parseFloat(formData.annualSalary);
//     appendMonthSal(totalSal);
//
//     //delete button attempt
//     // $('.delete').on('click', function() {
//     //   $(this).parent().remove();
//     // });
//
//     clearForm();
//   });
// });
//
//
//
// function appendDom(emp) {
//   var $emp=$('<div class="employee"></div>'); // create a div jQuery object
//   var $ul=$('<ul></ul>');
//   var $fName=$('<li>' + emp.employeeFirstName + '</li>' );
//   var $lName=$('<li>' + emp.employeeLastName + '</li>' );
//   var $id=$('<li>' + emp.employeeIdNumber + '</li>' );
//   var $salary=$('<li>' + emp.annualSalary + '</li>' );
//   var $job=$('<li>' + emp.jobTitle + '</li>' );
//   //delete button attempt
//   // var $delete=$('<button id="delete">' +  + '</button>' );
//
//   $ul.append($fName);
//   $ul.append($lName);
//   $ul.append($id);
//   $ul.append($salary);
//   $ul.append($job);
//   //delete button attempt
//   // $ul.append($delete);
//   $emp.append($ul);
//
//   // $emp.append('<li>' + emp.employeeFirstName + '</li>'); // add our employee data
//   // $emp.append('<li>' + emp.employeeLastName + '</li>');
//   // $emp.append('<li>' + emp.employeeIdNumber + '</li>');
//   // $emp.append('<li>' + emp.annualSalary + '</li>');
//   // $emp.append('<li>' + emp.jobTitle + '</li>');
//
//   $('#employees').append($emp); // append our div to the DOM
// };
//
// //appending monthly salary in Dom
// function appendMonthSal(salEmp){
//     $('#expend').text("Monthly Salary Expenditure: $" + ( parseFloat(salEmp)/12).toFixed(2));
// };
//
//
// function clearForm() {
//   $('form').find('input[type=text]').val('');
//   $('form').find('input[type=number]').val('');
// };
