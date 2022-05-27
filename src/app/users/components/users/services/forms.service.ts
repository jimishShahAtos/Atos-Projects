import { Injectable } from '@angular/core';
import { NetworkManager } from '../../../../util/networkManager';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  baseUrl = 'http://localhost:3000';
  sectionURL = this.baseUrl + '/sections';
  // apiGetForm: any;

  constructor(public networkManager: NetworkManager) { }
  
  getForm(){
    return this.networkManager.getAPI(this.sectionURL);
  }
}
