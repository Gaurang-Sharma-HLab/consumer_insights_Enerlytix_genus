import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerGrievanceComponent } from './consumer-grievance.component';

describe('ConsumerGrievanceComponent', () => {
  let component: ConsumerGrievanceComponent;
  let fixture: ComponentFixture<ConsumerGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerGrievanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
