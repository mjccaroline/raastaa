import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./model";

@Injectable()
export class NewUser{
    constructor(private http:HttpClient){}
    signup(user:User){
        return this.http.post("http://localhost:1234/signup",user);
    }
}