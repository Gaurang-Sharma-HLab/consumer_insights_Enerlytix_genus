import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheftProtectionComponent } from './theft-protection.component';

describe('TheftProtectionComponent', () => {
  let component: TheftProtectionComponent;
  let fixture: ComponentFixture<TheftProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheftProtectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheftProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
