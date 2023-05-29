import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPartidaComponent } from './editar-partida.component';

describe('EditarPartidaComponent', () => {
  let component: EditarPartidaComponent;
  let fixture: ComponentFixture<EditarPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPartidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
