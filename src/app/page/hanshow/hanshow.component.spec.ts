import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanshowComponent } from './hanshow.component';

describe('HanshowComponent', () => {
  let component: HanshowComponent;
  let fixture: ComponentFixture<HanshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
