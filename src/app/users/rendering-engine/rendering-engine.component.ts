import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rendering-engine',
  templateUrl: './rendering-engine.component.html',
  styleUrls: ['./rendering-engine.component.scss']
})
export class RenderingEngineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createFormGroup(){
    return new FormGroup({
      
    })
  }

}
