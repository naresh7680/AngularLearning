import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInstanceComponent } from './service-instance.component';

describe('ServiceInstanceComponent', () => {
  let component: ServiceInstanceComponent;
  let fixture: ComponentFixture<ServiceInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
