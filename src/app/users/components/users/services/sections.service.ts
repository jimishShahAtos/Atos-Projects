import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SectionsService {
  apiGetForm = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getFormInput(){
    return this.http.get(this.apiGetForm+"/sections");
  }
}
