import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titles="Login";

"uiSections"={
  loginDetails:[
    {
      "formType":"userInput",
      "ids": 1,
      "labels": "Email Address",
      "types": "email",
      "name": "login",
      "autocomplete":"off"
    },
    {
      "formType":"userInput",
      "ids": 2,
      "labels": "Password",
      "types": "password",
      "name": "password",
      "autocomplete":"off"
    }
  ],
  "buttonOptions":[
    {
      "ids": 3,
      "btnName": "Sign in",
      "types": "button",
      "classes":"btn btn-primary mt-3"
    },
    {
      "ids": 4,
      "btnName": "Reset",
      "types": "reset",
      "classes":"btn btn-secondary mt-3 ms-2"
    }
  ]
}

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {};

  ngOnInit(): void {
  }

  getAction(){
    alert("mkbk");
    this.router.navigate(['/DashboardComponent']);
  }
}
