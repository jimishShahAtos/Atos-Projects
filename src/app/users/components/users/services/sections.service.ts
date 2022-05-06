import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SectionsService {
  apiGetForm = "http://localhost:3000/formInfo";
  apiSelectOptions = " http://localhost:3000/courseInfo";
  // apiGetForm = "./src/assets/api/sections.json";
  // apiSelectOptions = "./src/assets/api/sections.json";

  constructor(private http:HttpClient) { }

  getFormInput(){
    return this.http.get(this.apiGetForm);
  }
  getselectOptions(){
    return this.http.get(this.apiSelectOptions);
  }
}
