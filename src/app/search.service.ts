import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
    userName: string = null;

    userArray: Array<any>;
    userData: Array<{ name: string, password: string }> = [];
    user: any;

    isLoggedIn: boolean = false;
    isLoading: boolean = false;
    loggedId: string = null;

    isUserSelected: boolean = true;
    searchEvent = new EventEmitter<string>();

    constructor(private http: HttpClient, private router: Router) {
        if ((JSON.parse(localStorage.userInfo)).length > 0) {
            this.userData = JSON.parse(localStorage.userInfo);
            console.log("Got", this.userData);
        }
    }

    userSelected = new EventEmitter<any>();

    LoggedIn(emailId: string, password: string) {
        this.isLoading = true;
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            const userArray = JSON.parse(userInfo);
            const user = userArray.find(user => user.username == emailId && user.password == password);
            console.log("User", user);
            if (user) {
                this.isLoading = false;
                this.isLoggedIn = true;
                this.loggedId = emailId;
                console.log("User Id", this.loggedId);
                this.router.navigateByUrl("/home");
            }
            else {
                this.isLoading = false;
                this.isLoggedIn = false;
                console.log(" In-valid username and password");
            }
        }
    }

    onSearchUser() {
        return this.http.get("https://api.github.com/search/users?q=" + this.userName);
    }

    // selectUser(index: number){
    //     console.log("User before call"+ this.userArray);
    //     this.isUserSelected = true;
    //     this.user = this.userArray[index];
    //     console.log("User after Call"+ this.user);
    // }
}