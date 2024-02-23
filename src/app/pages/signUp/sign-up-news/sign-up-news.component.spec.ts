import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpNewsComponent } from './sign-up-news.component';

describe('SignUpNewsComponent', () => {
  let component: SignUpNewsComponent;
  let fixture: ComponentFixture<SignUpNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
