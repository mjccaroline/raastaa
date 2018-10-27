import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
username="";
password="";
name="";
email="";
phone="";
valid=false;


createUser(userForm:NgForm) {
  console.log(userForm);
  console.log(userForm.valid);
  if(!(userForm.valid)) {
    alert('Kindly check the data you have entered. All fields are mandatory!!!');
  }
  else if(!(userForm.value.cnfpwd==userForm.value.pwd)) {
    alert('Password and Confirm password are not matching');
  }
  else {
    this.valid=userForm.valid;
    this.username=userForm.value.username;
    this.password=userForm.value.password;
    this.name=userForm.value.name;
    this.email=userForm.value.email;
    this.phone=userForm.value.phone;
    
  }

}
  constructor() { }

  ngOnInit() {
  }

}
