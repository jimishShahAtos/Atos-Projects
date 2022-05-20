import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  inputData: string = "";

  title:string="User Registration";
  formInfo:any;
  sections: any;
  optionsData:any;
  radioBtnData:any;
  actionButton="Submit";

  constructor(private formInputData: SectionsService) {
    formInputData.getFormInput().subscribe((inputData)=>{
      this.formInfo = inputData;
      console.log(this.formInfo);
    });
  }

  ngOnInit(): void {
  }

  clearInput(){
    this.inputData="";
  }
}
