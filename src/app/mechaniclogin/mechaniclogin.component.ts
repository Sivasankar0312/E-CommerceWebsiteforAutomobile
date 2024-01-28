import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mechaniclogin',
  templateUrl: './mechaniclogin.component.html',
  styleUrls: ['./mechaniclogin.component.css']
})
export class MechanicloginComponent {

  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
      role:['']
    });
  }

  ngOnInit() {}

  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }}
