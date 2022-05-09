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
  formOptionData:any;

  constructor(private formInputData: SectionsService, private SelectOptionData: SectionsService) {
    formInputData.getFormInput().subscribe((inputData)=>{
      this.formData = inputData;
    });

    SelectOptionData.getselectOptions().subscribe((selectFormData)=>{
      this.formOptionData = selectFormData;
    })
  }

  ngOnInit(): void {
  }
}
