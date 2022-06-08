import { Component, OnInit } from '@angular/core';;
import { PersonalInfoService } from '../services/PersonalInfo.service';
import { NetworkManager } from 'src/app/util/networkManager';
import { EducationInfoService } from '../services/EducationInfo.service';
import { RenderingEngineComponent } from '../renderingEngine/renderingEngine.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {  
  personalInfo:any;
  showVar : boolean = true;
  inputData: string = "";
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
  ){}

  ngOnInit(): void {
    this.personalInfo = RenderingEngineComponent;
    setTimeout(()=>{                           
      this.loader = false;
    }, 1000);
  }

  getPersonalInfo(){
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000);

    this.personalInfoServ.getPersonalInfoForm().subscribe((inputData) => {
      this.formPersDetails = inputData;
    });
  }

  getEducationInfo(){
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000);
    
    this.educationInfoServ.getEducationInfoForm().subscribe((inputData) => {
      this.formPersDetails = inputData;
    });
  }
}
