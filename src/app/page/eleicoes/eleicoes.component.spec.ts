import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleicoesComponent } from './eleicoes.component';

describe('EleicoesComponent', () => {
  let component: EleicoesComponent;
  let fixture: ComponentFixture<EleicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
