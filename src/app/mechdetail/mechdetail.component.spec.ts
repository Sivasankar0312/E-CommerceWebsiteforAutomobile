import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechdetailComponent } from './mechdetail.component';

describe('MechdetailComponent', () => {
  let component: MechdetailComponent;
  let fixture: ComponentFixture<MechdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
