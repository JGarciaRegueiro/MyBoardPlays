import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorGeneralComponent } from './error-general.component';

describe('ErrorGeneralComponent', () => {
  let component: ErrorGeneralComponent;
  let fixture: ComponentFixture<ErrorGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
