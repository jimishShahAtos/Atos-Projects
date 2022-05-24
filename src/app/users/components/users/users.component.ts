import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  // "tabbedNav"=
  //   [{
  //     "id":"nav-login-tab",
  //     "class":"nav-link active",
  //     "link":"#nav-login",      
  //     "tabName":"Login"
  //   },
  //   {
  //     "id":"nav-registration-tab",
  //     "class":"nav-link",      
  //     "link":"#nav-registration",
  //     "tabName":"Registration"
  //   }]
}