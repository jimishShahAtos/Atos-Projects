import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingEngineComponent } from './rendering-engine.component';

describe('RenderingEngineComponent', () => {
  let component: RenderingEngineComponent;
  let fixture: ComponentFixture<RenderingEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderingEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
