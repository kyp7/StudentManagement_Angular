import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{ HttpClientModule } from "@angular/common/http";

import { AppComponent }  from './app.component';
import { StudentComponent } from './student.component';
import {StudentService} from './student.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent,StudentComponent ],
  providers: [StudentService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
