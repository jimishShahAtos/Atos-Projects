import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-registration',
  templateUrl: './renderingEngine.component.html',
  styleUrls: ['./renderingEngine.component.scss']
})
export class RenderingEngineComponent implements OnInit {
  inputData: string = "";
  formDetails:any;
  sections: any;
  optionsData:any;
  radioBtnData:any;
  actionButton="Submit";

  constructor(private formsService: FormsService) {
    formsService.getForm().subscribe((inputData)=>{
      this.formDetails = inputData;
      console.log(this.formDetails);
    });
    
  }

  ngOnInit(): void {
  }

  clearInput(){
    this.inputData="";
  }
}
