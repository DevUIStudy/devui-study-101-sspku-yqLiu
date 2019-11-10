import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtComponent } from './defualt.component';

describe('DefualtComponent', () => {
  let component: DefualtComponent;
  let fixture: ComponentFixture<DefualtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefualtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefualtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});