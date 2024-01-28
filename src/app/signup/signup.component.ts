import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,public authService: AuthService) {}
  ngOnInit(): void {
  this.form = this.formBuilder.group(
  {
  fullname: ['', Validators.required],
  username: [
  '',
  [
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(20)
  ]
  ],
  email: ['', [Validators.required, Validators.email]],
  password: [
  '',
  [
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(40)
  ]
  ],
  confirmPassword: ['', Validators.required],
  // acceptTerms: [false, Validators.requiredTrue]
  },
  {
  validators: [Validation.match('password', 'confirmPassword')]
  }
  );
  }
  get f():{ [ket:string] :AbstractControl } { 
    return this.form.controls;
  }

  onSubmit(): void{
    this.submitted=true;

    if(this.form.invalid){
      return ;
    }
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }

    this.http.post('/api/auth/signup',this.form.value)
    .subscribe(res=>{
      console.log(res);
    })
  }

  onReset(): void{
    this.submitted=false;
    this.form.reset();
  }
}



