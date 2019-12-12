import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFood: string;
  productList: any;
  filteredList: any;
  @Output() filterFood: any;
  constructor(private productService: ProductService) {
    this.filterFood = new EventEmitter();
    this.filteredList
  }

  ngOnInit() {
  }

  filterList() {
    this.filterFood.emit(this.searchFood);
  }
}
