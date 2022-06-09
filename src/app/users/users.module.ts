import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderingEngineComponent } from './rendering-engine/rendering-engine.component';

@NgModule({
  declarations: [
    RenderingEngineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RenderingEngineComponent
  ]
})
export class UsersModule { }
