import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-rederingEngine',
  templateUrl: './renderingEngine.component.html',
  // template: `
  //   <div class="col-sm-12"></div>
  // `,
  styleUrls: ['./renderingEngine.component.scss']
})
export class RenderingEngineComponent implements OnInit {
  inputData: string = "";
  formDetails:any;
  sections: any;
  optionsData:any;
  radioBtnData:any;
  actionButton="Submit";

  constructor(public formsService: FormsService) {
    formsService.getPersonalInfoForm().subscribe((inputData)=>{
      this.formDetails = inputData;
    });    
  }
  
  ngOnInit(): void {
  }

  clearInput(){
    this.inputData="";
  }
}