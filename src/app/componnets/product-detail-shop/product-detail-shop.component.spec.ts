import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailShopComponent } from './product-detail-shop.component';

describe('ProductDetailShopComponent', () => {
  let component: ProductDetailShopComponent;
  let fixture: ComponentFixture<ProductDetailShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
