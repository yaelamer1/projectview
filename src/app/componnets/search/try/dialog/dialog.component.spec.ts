import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteAutoActiveFirstOptionExample } from './dialog.component';

describe('AutocompleteAutoActiveFirstOptionExample', () => {
  let component: AutocompleteAutoActiveFirstOptionExample;
  let fixture: ComponentFixture<AutocompleteAutoActiveFirstOptionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteAutoActiveFirstOptionExample ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteAutoActiveFirstOptionExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
