import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingEngineComponent } from './renderingEngine.component';

describe('RegistrationComponent', () => {
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
