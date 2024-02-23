import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyNewsComponent } from './privacy-news.component';

describe('PrivacyNewsComponent', () => {
  let component: PrivacyNewsComponent;
  let fixture: ComponentFixture<PrivacyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
