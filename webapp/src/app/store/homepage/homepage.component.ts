import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Products } from '../Products';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }
}
