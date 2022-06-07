import { Injectable } from '@angular/core';
import { NetworkManager } from 'src/app/util/networkManager';
import { FormsService } from './forms.service';

@Injectable({
  providedIn: 'root'
})

export class EducationInfoService extends FormsService{
 educationalInfoUrl = this.baseUrl + '/EducationSections';

  constructor(public formsService: FormsService, public networkManager: NetworkManager) {
    super();
    this.educationalInfoUrl;
  }

  getEducationInfoForm(){
    return this.networkManager.getAPI(this.educationalInfoUrl);
  }
}