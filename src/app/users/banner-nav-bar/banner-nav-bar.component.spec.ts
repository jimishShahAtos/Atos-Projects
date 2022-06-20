import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNavBarComponent } from './banner-nav-bar.component';

describe('BannerNavBarComponent', () => {
  let component: BannerNavBarComponent;
  let fixture: ComponentFixture<BannerNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
