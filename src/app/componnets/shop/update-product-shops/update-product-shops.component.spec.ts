import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductShopsComponent } from './update-product-shops.component';

describe('UpdateProductShopsComponent', () => {
  let component: UpdateProductShopsComponent;
  let fixture: ComponentFixture<UpdateProductShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
