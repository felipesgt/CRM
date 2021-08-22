import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsListaComponent } from './leads-lista.component';

describe('leadsListaComponent', () => {
  let component: LeadsListaComponent;
  let fixture: ComponentFixture<LeadsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
