import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SectionsService {
  apiGetForm = "http://localhost:3000/formInfo";
  apiGetOptions = "http://localhost:3000/options";

  constructor(private http:HttpClient) { }

  getFormInput(){
    return this.http.get(this.apiGetForm);
  }

  getOptions(){
    return this.http.get(this.apiGetOptions);
  }
}
