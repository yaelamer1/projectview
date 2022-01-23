import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFoundComponent } from './products-found.component';

describe('ProductsFoundComponent', () => {
  let component: ProductsFoundComponent;
  let fixture: ComponentFixture<ProductsFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
