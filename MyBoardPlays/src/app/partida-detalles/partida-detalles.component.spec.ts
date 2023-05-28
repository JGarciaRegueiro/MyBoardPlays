import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaDetallesComponent } from './partida-detalles.component';

describe('PartidaDetallesComponent', () => {
  let component: PartidaDetallesComponent;
  let fixture: ComponentFixture<PartidaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
