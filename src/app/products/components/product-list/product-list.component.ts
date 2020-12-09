import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  productList: any[];

  constructor(private productService: ProductService, private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    console.log(this.productList);
  }

  addToCartHandler(product: any): void {
    console.log(product);
    this.cartDataService.updateCart(product);
  }

}
