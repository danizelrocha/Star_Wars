import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportesComponent } from './esportes.component';

describe('EsportesComponent', () => {
  let component: EsportesComponent;
  let fixture: ComponentFixture<EsportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
