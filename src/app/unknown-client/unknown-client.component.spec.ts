/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnknownClientComponent } from './unknown-client.component';

describe('UnknownClientComponent', () => {
  let component: UnknownClientComponent;
  let fixture: ComponentFixture<UnknownClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
