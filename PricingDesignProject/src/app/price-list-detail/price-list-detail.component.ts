import { Component, OnInit, Input } from '@angular/core';
import { PriceList } from '../price-list.model';

@Component({
  selector: 'app-price-list-detail',
  templateUrl: './price-list-detail.component.html',
  styleUrls: ['./price-list-detail.component.scss']
})
export class PriceListDetailComponent implements OnInit {
  @Input() priceListDetail: PriceList;

  constructor() { }

  ngOnInit() {
  }

}
