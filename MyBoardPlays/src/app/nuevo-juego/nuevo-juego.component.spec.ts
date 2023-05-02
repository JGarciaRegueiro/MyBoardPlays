import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoJuegoComponent } from './nuevo-juego.component';

describe('NuevoJuegoComponent', () => {
  let component: NuevoJuegoComponent;
  let fixture: ComponentFixture<NuevoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
