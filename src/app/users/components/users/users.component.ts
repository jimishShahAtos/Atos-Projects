import { Component, OnInit } from '@angular/core';
import { SectionsService } from './services/sections.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title:string="User Registration";
  formData:any;
  optionsData:any;
  radioBtnData:any;
  actionButton="Submit";

  constructor(private formInputData: SectionsService, formOptionData: SectionsService, formRadioData: SectionsService) {
    formInputData.getFormInput().subscribe((inputData)=>{
      this.formData = inputData;
    });

    formRadioData.getRadio().subscribe((radioBtnData)=>{
      this.radioBtnData = radioBtnData;
    });

    formOptionData.getOptions().subscribe((optData)=>{
      this.optionsData = optData;
    });
  }

  ngOnInit(): void {
  }
}
