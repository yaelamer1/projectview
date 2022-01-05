import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInShopOfCategoryComponent } from './product-in-shop-of-category.component';

describe('ProductInShopOfCategoryComponent', () => {
  let component: ProductInShopOfCategoryComponent;
  let fixture: ComponentFixture<ProductInShopOfCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInShopOfCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInShopOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
