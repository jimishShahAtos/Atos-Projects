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


  

  
  // "formInfo"=[   
  //   {
  //     "ids":1,
  //     "label":"First Name",
  //     "labelClasss":"form-label",
  //     "type": "text",    
  //     "placeholder":"First Name",
  //     "isDisable": false,
  //     "minlength": 5,
  //     "maxlength": 15
  //   },
  //   {
  //     "ids":2,
  //     "label":"Second Name",
  //     "labelClasss":"form-label",
  //     "type": "text",    
  //     "placeholder":"Second Name",
  //     "isDisable": false,
  //     "minlength": 5,
  //     "maxlength": 15
  //   },
  //   {
  //     "ids":3,
  //     "label":"Email",
  //     "labelClasss":"form-label",
  //     "type": "email",      
  //     "placeholder":"xya@xyz.com",
  //     "isDisable": false,
  //     "minlength": 5,
  //     "maxlength": 15
  //   },
  //   {
  //     "ids":4,
  //     "label":"Phone",
  //     "labelClasss":"form-label",
  //     "type": "tel",
  //     "placeholder":"",
  //     "isDisable": false,
  //     "minlength": 5,
  //     "maxlength": 15
  //   }
  // ]

  // "courseInfo"=[
  // {
  //   "value":"courses",
  //   "options":"Select Course",
  //   "selectedAttr":"selected"
  // },
  // {
  //   "value":"bca",
  //   "options":"BCA",
  //   "selectedAttr":""
  // },
  // {
  //   "value":"bba",
  //   "options":"BBA",
  //   "selectedAttr":""
  // },
  // {
  //   "value":"bTech",
  //   "options":"B.Tech",
  //   "selectedAttr":""
  // },
  // {
  //   "value":"mba",
  //   "options":"MBA",
  //   "selectedAttr":""
  // },
  // {
  //   "value":"mca",
  //   "options":"MCA",
  //   "selectedAttr":""
  // },
  // {
  //   "value":"mTech",
  //   "options":"M.Tech",
  //   "selectedAttr":""
  // }
  // ]

}
