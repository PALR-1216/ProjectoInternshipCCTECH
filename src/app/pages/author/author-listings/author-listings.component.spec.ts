import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListingsComponent } from './author-listings.component';

describe('AuthorListingsComponent', () => {
  let component: AuthorListingsComponent;
  let fixture: ComponentFixture<AuthorListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorListingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
