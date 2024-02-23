import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCatNewsComponent } from './search-cat-news.component';

describe('SearchCatNewsComponent', () => {
  let component: SearchCatNewsComponent;
  let fixture: ComponentFixture<SearchCatNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCatNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCatNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
