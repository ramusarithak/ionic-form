
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-login',
 templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public Form: FormGroup;
  Loginform: any;

  constructor(public router: Router, public formBuilder: FormBuilder) {

    this.Form = formBuilder.group({
        username: ['', Validators.required],
        password:['',Validators.required],
       
    });

}
ngOnInit(){
  console.log("on init method",localStorage.value)
  var mydata = localStorage.getItem('username');
  var mydata1=localStorage.getItem('password')
  console.log("log in page",mydata,mydata1)
    

  
}
Login() {
  let data=this.Form.value
  var mydata = localStorage.getItem('username');
  var mydata1=localStorage.getItem('password')
    console.log('register',data);
    console.log(this.Form.value);
if(data.username==mydata && data.password == mydata1 ){

  this.router.navigateByUrl('/welcome');
}else{
  console.log("validation error")
}

    
}
}