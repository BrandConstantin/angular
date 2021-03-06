/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemplo03Component } from './ejemplo03.component';

describe('Ejemplo03Component', () => {
  let component: Ejemplo03Component;
  let fixture: ComponentFixture<Ejemplo03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
