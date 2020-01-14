import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebuilderComponent } from './homebuilder.component';

describe('HomebuilderComponent', () => {
  let component: HomebuilderComponent;
  let fixture: ComponentFixture<HomebuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
