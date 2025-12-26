import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTilesComponent } from './summary-tiles.component';

describe('SummaryTilesComponent', () => {
  let component: SummaryTilesComponent;
  let fixture: ComponentFixture<SummaryTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryTilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
