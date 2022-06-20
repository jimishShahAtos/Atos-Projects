import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-banner-nav-bar',
  templateUrl: './banner-nav-bar.component.html',
  styleUrls: ['./banner-nav-bar.component.scss']
})
export class BannerNavBarComponent implements OnInit {
  isModal= false;
  isFade = false; 
  

  constructor() { }

  ngOnInit(): void {
  }

  "bannerInfo": any[] = [
        {
          "isLogo":"Nacora",
          "isClass":"navbar-brand logo text-white fw-bold col-2"
        },
        {
          "isNavClass":"nav-item",
          "isClass":"nav-link opacity-75 fw-bold text-white active",
          "isLabel":"Verify A Certificate"
        },
        {
          "isNavClass":"nav-item",
          "isClass":"nav-link opacity-75 fw-bold text-white",
          "isLabel":"Report a Loss"
        },
        {
          "isLanguageClass":"opacity-75 fw-bold text-white bg-transparent"
        }
    ]

    "languages":any=[
      {
        "isOptionLabel":"English"
      },
      {
        "isOptionLabel":"English (UK)"
      },
      {
        "isOptionLabel":"English (IN)"
      },
      {
        "isOptionLabel":"French"
      },
      {
        "isOptionLabel":"Italian"
      }
    ]

    getModal(){
      this.isModal = true;
      this.isFade = true; 
    }
}