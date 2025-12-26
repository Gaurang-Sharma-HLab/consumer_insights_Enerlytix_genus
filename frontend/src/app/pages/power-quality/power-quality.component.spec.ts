import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerQualityComponent } from './power-quality.component';

describe('PowerQualityComponent', () => {
  let component: PowerQualityComponent;
  let fixture: ComponentFixture<PowerQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerQualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
