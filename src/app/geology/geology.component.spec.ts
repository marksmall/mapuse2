/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeologyComponent } from './geology.component';

describe('GeologyComponent', () => {
  let component: GeologyComponent;
  let fixture: ComponentFixture<GeologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
