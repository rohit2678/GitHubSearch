import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService{
    userName:string = null;

    userArray: Array<any>;
    user: any;

    isUserSelected: boolean = true;
    searchEvent = new EventEmitter<string>();
    constructor(private http: HttpClient){}

    userSelected = new EventEmitter<any>();

    onSearchUser(){
        return this.http.get("https://api.github.com/search/users?q="+this.userName);
    }

    // selectUser(index: number){
    //     console.log("User before call"+ this.userArray);
    //     this.isUserSelected = true;
    //     this.user = this.userArray[index];
    //     console.log("User after Call"+ this.user);
    // }
}