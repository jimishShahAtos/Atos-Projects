import { Injectable } from '@angular/core';
import { NetworkManager } from '../../../../util/networkManager';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  baseUrl = 'http://localhost:3000';
  personalInfoUrl = this.baseUrl + '/sections';
  educationalInfoUrl = this.baseUrl + '/EducationSections';

  constructor(public networkManager: NetworkManager) {
    this.personalInfoUrl;
    this.educationalInfoUrl;
    console.log(this.personalInfoUrl);
    console.log(this.educationalInfoUrl);
  }

  getPersonalInfoForm(){
    return this.networkManager.getAPI(this.personalInfoUrl);
  }

  getEducationInfoForm(){
    return this.networkManager.getAPI(this.educationalInfoUrl);    
  }
}