import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SectionsService {
  apiGetForm = 'http://localhost:3000';
  // apiGetForm: any;

  constructor(private http:HttpClient) { }

  getFormInput(){
    return this.http.get(this.apiGetForm+"/sections");
  }

  // public postFormInput(postData: Object){
  //   return this.http.post(this.apiGetForm + "/sections", postData);
  // }
}
