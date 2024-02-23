import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCatFilterComponent } from './search-cat-filter.component';

describe('SearchCatFilterComponent', () => {
  let component: SearchCatFilterComponent;
  let fixture: ComponentFixture<SearchCatFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCatFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCatFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
