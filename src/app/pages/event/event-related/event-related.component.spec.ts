import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRelatedComponent } from './event-related.component';

describe('EventRelatedComponent', () => {
  let component: EventRelatedComponent;
  let fixture: ComponentFixture<EventRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRelatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
