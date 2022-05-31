import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-educational-info',
  templateUrl: './educational-info.component.html',
  styleUrls: ['./educational-info.component.scss']
})

export class EducationalInfoComponent implements OnInit {
  formDetails:string = ' ';
  inputData:string=' ';

  constructor(public formsService: FormsService) {
    // formsService = this.formDetails;
  }

  ngOnInit(): void {
  }

  clearInput(){
    this.inputData="";
  }

//   "educationInfoUrl" = {
//     "sections":{
//         "titles":
//            [{
//                 "title":"Educational Info"
//             }],
//         "inputSection": [
//             {
//                 "sectionId": 1,
//                 "sectionName": "SectionOne",
//                 "sectionTitle": "Post Graduation Details",
//                 "isVisible": false,
//                 "uiObjects": [
//                     {
//                         "name": "textInput",
//                         "ids": 1,
//                         "type": "text",
//                         "inputLabel": "Course Name",
//                         "autocomplete":"off",
//                         "isDisable": false,
//                         "isVisible": true,
//                         "validationRules":
//                         [
//                             {  
//                                 "minLength":2,
//                                 "maxLength":10
//                             }
//                         ],
//                         "isRequired": true
//                     },
//                     {
//                         "name": "textInput",
//                         "ids": 1.2,
//                         "type": "text",
//                         "inputLabel": "University / Institute Name",
//                         "autocomplete":"off",
//                         "isDisable": false,
//                         "isVisible": true,
//                         "isRequired": true
//                     },                    
                                      
//                     {
//                         "name": "textInput",
//                         "ids": 1.4,
//                         "type": "date",
//                         "inputLabel": "passing Year [Calender-Year Selection]",
//                         "autocomplete":"off",
//                         "isDisable": false,
//                         "isVisible": true,
//                         "isRequired": true
//                     },                    
//                     {
//                         "name": "textInput",
//                         "ids": 1.5,
//                         "type": "text",
//                         "inputLabel": "GPA/Percentage",
//                         "autocomplete":"off",
//                         "isDisable": false,
//                         "isVisible": true,
//                         "isRequired": true
//                     }
//                 ]
//             }
//         ]
//     }
// }
  
}
