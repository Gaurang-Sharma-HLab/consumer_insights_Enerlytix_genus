import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueProtectionComponent } from './revenue-protection.component';

describe('RevenueProtectionComponent', () => {
  let component: RevenueProtectionComponent;
  let fixture: ComponentFixture<RevenueProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueProtectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
