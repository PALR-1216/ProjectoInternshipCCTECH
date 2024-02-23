import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNewsComponent } from './contact-news.component';

describe('ContactNewsComponent', () => {
  let component: ContactNewsComponent;
  let fixture: ComponentFixture<ContactNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
