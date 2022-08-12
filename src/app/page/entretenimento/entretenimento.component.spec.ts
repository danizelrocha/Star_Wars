import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretenimentoComponent } from './entretenimento.component';

describe('EntretenimentoComponent', () => {
  let component: EntretenimentoComponent;
  let fixture: ComponentFixture<EntretenimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntretenimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntretenimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
