import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlogsComponent } from './about-blogs.component';

describe('AboutBlogsComponent', () => {
  let component: AboutBlogsComponent;
  let fixture: ComponentFixture<AboutBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
