import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { User } from '../model';
import { NewUser } from '../service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

valid=false;

constructor(private newUser:NewUser) { }

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
    const user:User={
      username:userForm.value.username,
      password:userForm.value.pwd,
      name:userForm.value.name,
      email:userForm.value.email,
      phone:userForm.value.phone
    }
    
    console.log(user);
    this.newUser.signup(user).subscribe((data)=>{
      console.log(data);
      alert("New user created!!!");      
    },(error)=>{
      console.log(error);
      
    });
  }

}
  

  ngOnInit() {
  }

}
