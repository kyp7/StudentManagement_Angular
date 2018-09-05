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
var http_1 = require("@angular/common/http");
var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'my-auth-token'
            })
        };
    }
    StudentService.prototype.create = function (student) {
        var params = new http_1.HttpParams()
            .set('fname', student.fname).set('lname', student.lname).set('email', student.email).set('password', "admin").set('id', JSON.stringify(0));
        this.http.post('http://localhost:8080/user/add', params, this.httpOptions)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        console.log(JSON.stringify(student));
    };
    StudentService.prototype.getalldata = function () {
        return this.http.get('http://localhost:8080/user/search');
    };
    StudentService.prototype.updateData = function (student) {
        var params = new http_1.HttpParams()
            .set('fname', student.fname).set('lname', student.lname).set('email', student.email).set('password', "admin").set('id', JSON.stringify(student.id));
        this.http.post('http://localhost:8080/user/add', params, this.httpOptions)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        console.log(JSON.stringify(student));
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map