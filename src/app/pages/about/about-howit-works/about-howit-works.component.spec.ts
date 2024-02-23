import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHowitWorksComponent } from './about-howit-works.component';

describe('AboutHowitWorksComponent', () => {
  let component: AboutHowitWorksComponent;
  let fixture: ComponentFixture<AboutHowitWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHowitWorksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutHowitWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
