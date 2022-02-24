import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductOfShopComponent } from './all-product-of-shop.component';

describe('AllProductOfShopComponent', () => {
  let component: AllProductOfShopComponent;
  let fixture: ComponentFixture<AllProductOfShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductOfShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductOfShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
