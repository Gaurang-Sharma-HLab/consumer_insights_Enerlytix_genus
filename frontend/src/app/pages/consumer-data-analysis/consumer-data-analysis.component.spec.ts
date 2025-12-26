import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDataAnalysisComponent } from './consumer-data-analysis.component';

describe('ConsumerDataAnalysisComponent', () => {
  let component: ConsumerDataAnalysisComponent;
  let fixture: ComponentFixture<ConsumerDataAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerDataAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
