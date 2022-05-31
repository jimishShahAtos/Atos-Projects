import { Injectable } from '@angular/core';
import { NetworkManager } from '../../../../util/networkManager';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  baseUrl = 'http://localhost:3000';
  personalInfoUrl = this.baseUrl + '/sections';
  educationalInfoUrl = this.baseUrl + '/educationSections';

  constructor(public networkManager: NetworkManager) {
    this.educationInfoUrl;
    console.log(this.educationInfoUrl);
  }
  
  getPersonalInfoForm(){
    return this.networkManager.getAPI(this.personalInfoUrl);
  }

  getEducationInfoForm(){
    return this.networkManager.getAPI(this.educationalInfoUrl);
  }

  



//   getEducationInfoForm(){             
//     this.educationInfoUrl;
//     console.log(this.educationInfoUrl);
//   }
  

"educationInfoUrl" = {
    "sections":{
        "titles":[
            {
                "title":"Educational Info"
            }
        ],
        "inputSection": [
            {
                "sectionId": 1,
                "sectionName": "SectionOne",
                "sectionTitle": "Post Graduation Details",
                "isVisible": false,
                "uiObjects": [
                    {
                        "name": "textInput",
                        "ids": 1,
                        "type": "text",
                        "inputLabel": "Course Name",
                        "autocomplete":"off",
                        "isDisable": false,
                        "isVisible": true,
                        "validationRules":
                        [
                            {  
                                "minLength":2,
                                "maxLength":10
                            }
                        ],
                        "isRequired": true
                    },
                    {
                        "name": "textInput",
                        "ids": 1.2,
                        "type": "text",
                        "inputLabel": "University / Institute Name",
                        "autocomplete":"off",
                        "isDisable": false,
                        "isVisible": true,
                        "isRequired": true
                    },                    
                                      
                    {
                        "name": "textInput",
                        "ids": 1.4,
                        "type": "date",
                        "inputLabel": "passing Year [Calender-Year Selection]",
                        "autocomplete":"off",
                        "isDisable": false,
                        "isVisible": true,
                        "isRequired": true
                    },                    
                    {
                        "name": "textInput",
                        "ids": 1.5,
                        "type": "text",
                        "inputLabel": "GPA/Percentage",
                        "autocomplete":"off",
                        "isDisable": false,
                        "isVisible": true,
                        "isRequired": true
                    }
                ]
            }
        ]
    }
}


}
