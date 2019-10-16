import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private search: SearchService) { }

  emailId: string;
  password: string;

  ngOnInit() {
  }

  onLogin(){
    this.search.LoggedIn(this.emailId,this.password);
  }
}
