import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllempComponent } from './allemp.component';

describe('AllempComponent', () => {
  let component: AllempComponent;
  let fixture: ComponentFixture<AllempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
