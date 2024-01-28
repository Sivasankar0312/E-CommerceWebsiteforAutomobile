import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicloginComponent } from './mechaniclogin.component';

describe('MechanicloginComponent', () => {
  let component: MechanicloginComponent;
  let fixture: ComponentFixture<MechanicloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
