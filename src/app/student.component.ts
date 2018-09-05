import { Component, Input } from '@angular/core';
import { Student } from './student';
import {StudentService} from './student.service'
import { getAllDebugNodes } from '../../node_modules/@angular/core/src/debug/debug_node';
@Component ({
   selector: 'student-form',
   templateUrl: './student-form.component.html'
})

export class StudentComponent {
    Student: any ={};
    students: Student[]=[];
    stindex: number;
    fname: any;
    //loading = false;

    constructor(
        private studentservice: StudentService
    ){}

    
    formSubmit(){
        //this.loading = true;
        console.log(this.Student);
        this.studentservice.create(this.Student);
        
    }

    Update(){
        this.studentservice.updateData(this.Student);
    }
    
    Retrive(){
            this.studentservice.getalldata().subscribe(
            students=> {this.students = students;
        } );   
    }

    formUpdate(event,student){
                
         //console.log(student);
         this.Student.fname = this.students[student -1].fname;
         this.Student.lname = this.students[student -1].lname;
         this.Student.email = this.students[student -1].email;
         this.Student.password = this.students[student -1].password;
         this.Student.id = this.students[student -1].id;

         console.log("formupdate closed");
    }

}