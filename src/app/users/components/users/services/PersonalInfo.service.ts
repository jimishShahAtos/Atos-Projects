import { Injectable } from '@angular/core';
import { NetworkManager } from 'src/app/util/networkManager';
import { FormsService } from './forms.service';

@Injectable({
  providedIn: 'root'
})

export class PersonalInfoService extends FormsService {
  personalInfoUrl = this.baseUrl + '/sections';

  constructor(public networkManager: NetworkManager) {
    super();
  }

  getPersonalInfoForm(){
    // alert("In getPersonalInfoForm Mehtod...")
    return this.networkManager.getAPI(this.personalInfoUrl);
  }
  
}