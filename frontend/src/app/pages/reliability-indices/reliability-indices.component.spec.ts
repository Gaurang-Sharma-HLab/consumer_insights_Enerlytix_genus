import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliabilityIndicesComponent } from './reliability-indices.component';

describe('ReliabilityIndicesComponent', () => {
  let component: ReliabilityIndicesComponent;
  let fixture: ComponentFixture<ReliabilityIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReliabilityIndicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliabilityIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
