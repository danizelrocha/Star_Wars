import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodracersComponent } from './podracers.component';

describe('PodracersComponent', () => {
  let component: PodracersComponent;
  let fixture: ComponentFixture<PodracersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodracersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodracersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
