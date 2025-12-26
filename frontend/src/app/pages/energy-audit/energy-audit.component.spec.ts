import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAuditComponent } from './energy-audit.component';

describe('EnergyAuditComponent', () => {
  let component: EnergyAuditComponent;
  let fixture: ComponentFixture<EnergyAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
