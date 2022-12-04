import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockquotesComponent } from './stockquotes.component';

describe('StockquotesComponent', () => {
  let component: StockquotesComponent;
  let fixture: ComponentFixture<StockquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockquotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
