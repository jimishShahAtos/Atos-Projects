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

  constructor(private formInputData: SectionsService, formOptionData: SectionsService) {
    formInputData.getFormInput().subscribe((inputData)=>{
      this.formData = inputData;
    });

    formOptionData.getOptions().subscribe((optData)=>{
      this.optionsData = optData;
    });
  }

  ngOnInit(): void {
  }
}
