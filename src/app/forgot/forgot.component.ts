import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private router: Router) { }

  emailId: string;

  ngOnInit() {
  }

  onNext() {
    const userInfor = localStorage.getItem("userInfo");
    if (userInfor) {
      console.log("UserInfo", userInfor, "Email: ", this.emailId);
      const userArray = JSON.parse(userInfor);
      const user = userArray.find((user: { name: string, password: string }) => user.name == this.emailId);
      console.log("User ", user);
      if (user) {
        alert("Password sent to your email");
        this.router.navigateByUrl("/");
      }
      else {
        console.log("User Nahi Mila")
        if (confirm("Email Id does not exists. Do you want to signUp ?")) {
          this.router.navigateByUrl("/signUp");
        }
        else {
          this.emailId = "";
        }
      }
    }
    else {
      alert("Email Id does not exists. Kindly Sign Up...");
      this.router.navigateByUrl("/signUp");
    }
  }

}
