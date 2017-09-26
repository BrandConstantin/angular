/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemplo06Component } from './ejemplo06.component';

describe('Ejemplo06Component', () => {
  let component: Ejemplo06Component;
  let fixture: ComponentFixture<Ejemplo06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
