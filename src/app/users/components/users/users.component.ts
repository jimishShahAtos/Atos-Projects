import { Component, OnInit } from '@angular/core';
import { SectionsService } from './services/sections.service';
import { FormDetails } from './interface/form-details';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  formsDetails: FormDetails[] | undefined; 

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
}
