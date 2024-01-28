import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-contactus',
  templateUrl:'./contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent  {

  postId;
  submitted: boolean;
  reactiveForm = new FormGroup({
    to: new FormControl(''),
    subject: new FormControl(''),
    text: new FormControl(''),

  });
  constructor(private http:HttpClient){}

  submit() {
    console.log(this.reactiveForm.getRawValue());
    this.http.post('/api/v1/sendmail',this.reactiveForm.getRawValue()).subscribe(data=>{
      
    })
  }




  
}
