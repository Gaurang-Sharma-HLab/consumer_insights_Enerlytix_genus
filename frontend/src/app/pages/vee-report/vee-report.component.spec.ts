import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeeReportComponent } from './vee-report.component';

describe('VeeReportComponent', () => {
  let component: VeeReportComponent;
  let fixture: ComponentFixture<VeeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeeReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
