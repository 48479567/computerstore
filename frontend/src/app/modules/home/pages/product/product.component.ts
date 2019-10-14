import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/shared/models/schema/product/product.schema';
import { ProductService } from 'src/app/core/services/schema/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: ProductCard[] = [
    new ProductCard('Product 1', 2, 'https://i.imgur.com/boLV7nu.png'),
    new ProductCard('Product 2', 2, 'https://i.imgur.com/rUZlSSz.png'),
    new ProductCard('Product 3', 2, 'https://i.imgur.com/WD6e2Hl.jpg'),
    new ProductCard('Product 4', 2, 'https://i.imgur.com/yEKB3RH.png'),
    new ProductCard('Product 5', 2, 'https://i.imgur.com/GizQkzs.png'),
    new ProductCard('Product 6', 2, 'https://i.imgur.com/rrPjzC8.jpg'),
    new ProductCard('Product 7', 2, 'https://i.imgur.com/yCkxBe3.png'),
    new ProductCard('Product 8', 2, 'https://i.imgur.com/H3aHmxG.png'),
    new ProductCard('Product 9', 2, 'https://i.imgur.com/FIEVfid.png'),
    new ProductCard('Product 10', 2, 'https://i.imgur.com/ZiPHBUe.png'),

  ];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() { }
}
