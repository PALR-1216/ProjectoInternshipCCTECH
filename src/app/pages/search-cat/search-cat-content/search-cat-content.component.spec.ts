import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCatContentComponent } from './search-cat-content.component';

describe('SearchCatContentComponent', () => {
  let component: SearchCatContentComponent;
  let fixture: ComponentFixture<SearchCatContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCatContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
