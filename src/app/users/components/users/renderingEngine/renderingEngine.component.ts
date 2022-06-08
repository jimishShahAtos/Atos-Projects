import { Component, OnInit } from '@angular/core';;
import { PersonalInfoService } from '../services/PersonalInfo.service';
import { NetworkManager } from 'src/app/util/networkManager';
import { EducationInfoService } from '../services/EducationInfo.service';

@Component({
  selector: 'app-rederingEngine',
  templateUrl: './renderingEngine.component.html',
  styleUrls: ['./renderingEngine.component.scss']
})
export class RenderingEngineComponent implements OnInit {
  inputData: string = "";
  formDetails: any;
  formPersDetails: any;
  formEduDetails: any;
  sections: any;
  optionsData: any; 
  radioBtnData: any;
  actionButton = "Submit";
  loader = true;
  

  constructor(
    public personalInfoServ: PersonalInfoService, 
    public educationInfoServ: EducationInfoService, 
    public networkManager: NetworkManager
  ) {
    this.showLoader();
    this.personalInfoServ.getPersonalInfoForm().subscribe((inputData) => {
      this.formPersDetails = inputData;
    });

    this.educationInfoServ.getEducationInfoForm().subscribe((inputData) => {
      this.formEduDetails = inputData;
    });
  }

  showLoader(){
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

  clearInput() {
    this.inputData = "";
  }
}