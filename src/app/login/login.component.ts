import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:ApiService) { }

  ngOnInit() {
  }

  onLoginUser(form:NgForm) {
    console.log(form);
    
    if(!(form.valid)){
      alert("Please enter username and password.");
    }
    else{
      this.login.getUser(form.value.username,form.value.pwd).subscribe((data)=> {
        console.log("from db: ",data);
        
        if(data['success'])
        {
          alert("Successfully logged in");
         // console.log(data);
          
        }
        else{
          alert("Invalid credentials!!!");
        }
      },(error)=>{
        console.log(error);
        
      });
    }
  }

  
}
