import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NetworkManager {
    public static successAPiCallMessage: string = "API calls works successfully";

    constructor(public http: HttpClient){
    }

    public getAPI(url: string, options?: any){
      return this.http.get(url, options)
    }    
}