import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryForShopComponent } from './category-for-shop.component';

describe('UpdateProductShopsComponent', () => {
  let component: CategoryForShopComponent;
  let fixture: ComponentFixture<CategoryForShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryForShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryForShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
