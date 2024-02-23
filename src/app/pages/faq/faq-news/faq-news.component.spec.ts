import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqNewsComponent } from './faq-news.component';

describe('FaqNewsComponent', () => {
  let component: FaqNewsComponent;
  let fixture: ComponentFixture<FaqNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
