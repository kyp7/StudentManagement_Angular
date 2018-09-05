"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var student_service_1 = require("./student.service");
var StudentComponent = (function () {
    //loading = false;
    function StudentComponent(studentservice) {
        this.studentservice = studentservice;
        this.Student = {};
        this.students = [];
    }
    StudentComponent.prototype.formSubmit = function () {
        //this.loading = true;
        console.log(this.Student);
        this.studentservice.create(this.Student);
    };
    StudentComponent.prototype.Update = function () {
        this.studentservice.updateData(this.Student);
    };
    StudentComponent.prototype.Retrive = function () {
        var _this = this;
        this.studentservice.getalldata().subscribe(function (students) {
            _this.students = students;
        });
    };
    StudentComponent.prototype.formUpdate = function (event, student) {
        //console.log(student);
        this.Student.fname = this.students[student - 1].fname;
        this.Student.lname = this.students[student - 1].lname;
        this.Student.email = this.students[student - 1].email;
        this.Student.password = this.students[student - 1].password;
        this.Student.id = this.students[student - 1].id;
        console.log("formupdate closed");
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    core_1.Component({
        selector: 'student-form',
        templateUrl: './student-form.component.html'
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentComponent);
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map