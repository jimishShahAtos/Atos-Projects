import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  baseUrl = 'http://localhost:3000';

  constructor() {
  }
}