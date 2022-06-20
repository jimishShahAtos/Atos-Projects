import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isModal:boolean = true;
  isFade:boolean = true;

  constructor() {}

  ngOnInit(): void {
  }

  onClose(){
    this.isModal = false; 
    this.isFade = false;
  }

}
