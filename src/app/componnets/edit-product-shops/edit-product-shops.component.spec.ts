import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductShopsComponent } from './edit-product-shops.component';

describe('EditProductShopsComponent', () => {
  let component: EditProductShopsComponent;
  let fixture: ComponentFixture<EditProductShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
