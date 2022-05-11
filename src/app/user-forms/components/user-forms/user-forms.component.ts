import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit {
  title="Registration Form";
  reactiveRegistrationForms:FormGroup;

  // "formInfo": [
  //   {
  //       "formType": "inputText",
  //       "type": "text",
  //       "id":"floatingFirstName",
  //       "formControlName":"firstName",
  //       "maxlength":25,
  //       "autocomplete":"off",
  //       "label":"First Name"
  //   },
  //   {
  //       "formType": "inputText",
  //       "type": "text",
  //       "id":"floatingLastName",
  //       "formControlName":"lastName",
  //       "maxlength":25,
  //       "autocomplete":"off",
  //       "label":"Last Name"
  //   }
  // ]

  constructor(private formBuilder:FormBuilder) {
    this.reactiveRegistrationForms = new FormGroup({
      formArrays: this.formBuilder.array([])
    })

    this.buildForm();
  }

  buildForm(){
    const controlArray = this.reactiveRegistrationForms.get('formArrays') as FormArray;

    // Object.keys(this.formInfo).forEach((i) => {
    //   controlArray.push(
    //     this.formBuilder.group({
    //       formType: new FormControl({ value: this.formInfo[i].formType, disabled: true })
    //     })
    //   )
    // })
  }

  ngOnInit(): void {
    this.reactiveRegistrationForms = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      courseName: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      countryCode: new FormControl(null,Validators.required),
      dob: new FormControl(null, Validators.required),
      phone: new FormControl(('+91'), [Validators.required]),
      addr: new FormControl(null, Validators.required)
    })
  }

   

    
    // "options": [
    //     {
    //         "value": "courses",
    //         "optionList": "Select Course",
    //         "selectedAttr": "selected"
    //     },
    //     {
    //         "value": "bca",
    //         "options": "BCA",
    //         "selectedAttr": ""
    //     },
    //     {
    //         "value": "bba",
    //         "options": "BBA",
    //         "selectedAttr": ""
    //     },
    //     {
    //         "value": "bTech",
    //         "options": "B.Tech",
    //         "selectedAttr": ""
    //     },
    //     {
    //         "value": "mba",
    //         "options": "MBA",
    //         "selectedAttr": ""
    //     },
    //     {
    //         "value": "mca",
    //         "options": "MCA",
    //         "selectedAttr": ""
    //     },
    //     {
    //         "value": "mTech",
    //         "options": "M.Tech",
    //         "selectedAttr": ""
    //     }
    // ]


  onSubmit(){
    console.log(this.reactiveRegistrationForms);
    
  }
}
