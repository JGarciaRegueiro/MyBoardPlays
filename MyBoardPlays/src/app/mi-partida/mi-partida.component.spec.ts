import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPartidaComponent } from './mi-partida.component';

describe('MiPartidaComponent', () => {
  let component: MiPartidaComponent;
  let fixture: ComponentFixture<MiPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPartidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
