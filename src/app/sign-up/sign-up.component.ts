import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private search: SearchService, private router: Router) { }

  emailId: string;
  password: string;
  cpassword: string;

  ngOnInit() {
  }

  onSignUp() {
    if (this.password === this.cpassword) {
      this.search.userData.push({ name: this.emailId, password: this.password });
      console.log("Matched", this.search.userData);
      //localStorage.userInfo = JSON.stringify(this.search.userData);
      localStorage.setItem("userInfo", JSON.stringify(this.search.userData));
      console.log("SignUp", JSON.parse(localStorage.getItem("userInfo")));
      this.router.navigateByUrl("");
    }
  }
}
