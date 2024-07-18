import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:any[]=[];
  constructor(private productService:ProductService, private route:Router){};

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res)=>{
    this.products = res
    })
  }


  addToCart(){
    this.route.navigateByUrl('/cart')
  }

}
