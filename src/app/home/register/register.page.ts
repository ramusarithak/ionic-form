import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public loginForm: FormGroup;

  constructor(public router: Router, public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password:['',Validators.required],
        Email: ['', Validators.required]
    });

}
ngOnInit(){
  console.log("on init method")
  
  
}

register() {
    console.log('register');
    console.log(this.loginForm.value);
    this.router.navigateByUrl('/login');
   let form=this.loginForm.value
   
    localStorage.setItem("username",form.username);

    localStorage.setItem("password",form.password);
    localStorage.setItem("Email",form.Email);

}
}