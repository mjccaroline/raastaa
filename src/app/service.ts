import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./model";

@Injectable()
export class ApiService{
    constructor(private http:HttpClient){}
    signup(user:User){
        return this.http.post("http://localhost:1234/signup",user);
    }

    getUser(username:String,password:String){
        console.log("body: ",username);
        return this.http.post("http://localhost:1234/login",{"username":username,"password":password});
    }
    
}