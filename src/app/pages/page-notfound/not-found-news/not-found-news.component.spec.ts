import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundNewsComponent } from './not-found-news.component';

describe('NotFoundNewsComponent', () => {
  let component: NotFoundNewsComponent;
  let fixture: ComponentFixture<NotFoundNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
