import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-rederingEngine',
  templateUrl: './renderingEngine.component.html',
  styleUrls: ['./renderingEngine.component.scss']
})
export class RenderingEngineComponent implements OnInit {
  inputData: string = "";
  formDetails: any;
  sections: any;
  optionsData: any;
  radioBtnData: any;
  actionButton = "Submit";

  constructor(public formsService: FormsService) {
    formsService.getPersonalInfoForm().subscribe((inputData) => {
      this.formDetails = inputData;
    });
  }

  ngOnInit(): void {
  }

  clearInput() {
    this.inputData = "";
  }

  EducationDetailsSections = {
    "titles":
      [
        {
          "title": "Education Info"
        }
      ],
    "inputSection": [
      {
        "uiObjects": [
          {
            "isName": "textInput",
            "isIds": 1,
            "isType": "text",
            "inputLabel": "Course Name",
            "isAutocomplete": "off",
            "isDisable": false,
            "isVisible": true,
            "isPlaceholder": "Please Enter Course Name",
            "validationRules":
              [
                {
                  "minLength": 2,
                  "maxLength": 10
                }
              ],
            "isRequired": true
          },
          {
            "isName": "textInput",
            "isIds": 2,
            "isType": "text",
            "inputLabel": "University / Institute Name",
            "isAutocomplete": "off",
            "isDisable": false,
            "isVisible": true,
            "isRequired": true,
            "isPlaceholder": "Please Enter University/Institute Name"
          },

          {
            "isName": "textInput",
            "isIds": 3,
            "isType": "month",
            "inputLabel": "passing Year [Calender - year selection]",
            "isAutocomplete": "off",
            "isDisable": false,
            "isVisible": true,
            "isRequired": true,
            "isPlaceholder": "MMMM/YYYY"
          },
          {
            "isName": "textInput",
            "isIds": 4,
            "isType": "number",
            "inputLabel": "GPA / percentage",
            "isAutocomplete": "off",
            "isDisable": false,
            "isVisible": true,
            "isRequired": true,
            "isPlaceholder": "Passing Year in number"
          }
        ],
        "buttonObjects":[
          {
            "labels":"Submit",
            "isType":"submit",

          },
          {
            "labels":"Reset",
            "isType":"reset",
          }
        ]
      }
    ]
  }
}