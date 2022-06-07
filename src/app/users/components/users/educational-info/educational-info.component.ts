import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-educational-info',
  templateUrl: './educational-info.component.html',
  styleUrls: ['./educational-info.component.scss']
})

export class EducationalInfoComponent implements OnInit {
  emplDetails:any;
  inputData:string=' ';

  constructor() {
  }

  ngOnInit(): void {
  }

  clearInput(){
    this.inputData="";
  }  
}
