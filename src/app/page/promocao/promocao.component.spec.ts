import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoComponent } from './promocao.component';

describe('PromocaoComponent', () => {
  let component: PromocaoComponent;
  let fixture: ComponentFixture<PromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
