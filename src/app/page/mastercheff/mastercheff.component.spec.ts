import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercheffComponent } from './mastercheff.component';

describe('MastercheffComponent', () => {
  let component: MastercheffComponent;
  let fixture: ComponentFixture<MastercheffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastercheffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastercheffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
