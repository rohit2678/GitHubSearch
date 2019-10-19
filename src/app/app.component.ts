import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'searchUserName';

  constructor(private router: Router, private search: SearchService){
    const userInfo = sessionStorage.getItem("userInfo");
    if(userInfo){
      const user = JSON.parse(userInfo);
      search.isLoggedIn = true;
      search.userFound = user;
      search.loggedId = user.name;
      router.navigateByUrl("/home");
    }
    else{
      router.navigateByUrl("/");
    }
  }
}