import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
    userName: string = null;

    userArray: Array<any>;
    userData: Array<{ name: string, password: string }> = [];
    user: any;
    userFound: {name: string, password: string};

    isLoggedIn: boolean = false;
    isLoading: boolean = false;
    loggedId: string = null;

    isUserSelected: boolean = true;
    searchEvent = new EventEmitter<string>();

    constructor(private http: HttpClient, private router: Router) {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            this.userData = JSON.parse(localStorage.userInfo);
            console.log("Got", this.userData);
        }
    }

    userSelected = new EventEmitter<any>();

    LoggedIn(emailId: string, password: string) {
        this.isLoading = true;
        const userInfo = localStorage.getItem("userInfo");

        //console.log("userInfo", )
        if (userInfo) {
            const userArray = JSON.parse(userInfo);
            console.log("UserList", userArray);
            const user = userArray.find((user: {name: string, password: string}) => user.name == emailId && user.password == password);
            console.log("Users", user, "emailid", emailId, "password", password);
            if (user) {
                this.userFound = user;
                this.isLoading = false;
                this.isLoggedIn = true;
                this.loggedId = emailId;
                console.log("User Id", this.loggedId);
                this.router.navigateByUrl("/home");
            }
            else {
                this.isLoading = false;
                this.isLoggedIn = false;
                alert(" In-valid username and password");
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