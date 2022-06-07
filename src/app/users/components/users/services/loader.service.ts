import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private isLoading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.isLoading.asObservable();

  constructor() {
  }

//   Showing stage
  showLoader(){
      this.isLoading.next(true);
  }

//   hiding stage
  hideLoader(){
      this.isLoading.next(false)
  }
}