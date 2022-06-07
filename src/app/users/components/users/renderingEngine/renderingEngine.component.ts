import { Component, OnInit } from '@angular/core';;
import { PersonalInfoService } from '../services/PersonalInfo.service';
import { NetworkManager } from 'src/app/util/networkManager';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-rederingEngine',
  templateUrl: './renderingEngine.component.html',
  styleUrls: ['./renderingEngine.component.scss']
})
export class RenderingEngineComponent implements OnInit {
  inputData: string = "";
  formPersDetails: any;
  formEduDetails: any;
  sections: any;
  optionsData: any; 
  radioBtnData: any;
  actionButton = "Submit";
  

  constructor(public personalInfoServ: PersonalInfoService, public networkManager: NetworkManager) {
    this.personalInfoServ.getPersonalInfoForm().subscribe((inputData) => {
      this.formPersDetails = inputData;
    });
  }


  ngOnInit(): void {
  }

  clearInput() {
    this.inputData = "";
  }
}