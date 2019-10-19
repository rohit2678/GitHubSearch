import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private search: SearchService, private router: Router) { }

  ngOnInit() {
    
  }

  onLogOut(){
    sessionStorage.clear();
    this.search.isLoggedIn = false;
    this.search.userFound = null;
    this.router.navigateByUrl("/");
  }

}
