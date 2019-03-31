import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2WaysCombinationComponent } from './test2-ways-combination.component';

describe('Test2WaysCombinationComponent', () => {
  let component: Test2WaysCombinationComponent;
  let fixture: ComponentFixture<Test2WaysCombinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2WaysCombinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2WaysCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
