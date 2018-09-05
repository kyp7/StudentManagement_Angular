import { Injectable } from "@angular/core";
import{ HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import {Student} from "./student";
import { error } from "util";
import { Observable } from "../../node_modules/rxjs/Observable";

@Injectable()
export class StudentService{

    private studentObservable : Observable<any[]>;
    constructor(private http: HttpClient){ }

    
    
    httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'my-auth-token'
            })
          };
    
    create(student: Student){

       const params = new HttpParams()
        .set('fname', student.fname).set('lname',student.lname).set('email',student.email).set('password',"admin").set('id',JSON.stringify(0));
        this.http.post('http://localhost:8080/user/add' ,params,this.httpOptions)
                .subscribe(
                    res => {
                        console.log(res);
                    },
                    err =>{
                        console.log(err);
                    }
                );
                console.log(JSON.stringify(student));
    }

    getalldata(){
        return this.http.get<Student[]>('http://localhost:8080/user/search');
    }

    updateData(student: Student){

        const params = new HttpParams()
         .set('fname', student.fname).set('lname',student.lname).set('email',student.email).set('password',"admin").set('id',JSON.stringify(student.id));
         this.http.post('http://localhost:8080/user/add' ,params,this.httpOptions)
                 .subscribe(
                     res => {
                         console.log(res);
                     },
                     err =>{
                         console.log(err);
                     }
                 );
                 console.log(JSON.stringify(student));
     }
}