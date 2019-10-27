import { Component, OnInit } from '@angular/core';
import { PriceList } from '../price-list.model';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  priceList: PriceList[] = [
    {
      header: {
        headerText: 'Sole Proprietor',
        headerAddText: '',
      },
      price: {
        priceCount: '$19.99',
        priceTime: 'per month',
      },
      description: ['100 invoices', 'Custom scripting & scheduling', 'Payment & accounting software integration'],
    },
    {
      header: {
        headerText: 'Small Business',
        headerAddText: 'Most Popular',
      },
      price: {
        priceCount: '$49.99',
        priceTime: 'per month',
      },
      description: ['300 invoices', 'Custom scripting & scheduling', 'Payment & accounting software integration'],
    },
    {
      header: {
        headerText: 'Enterprise',
        headerAddText: '',
      },
      price: {
        priceCount: '$99.99',
        priceTime: 'per month',
      },
      description: ['500 invoices', 'Custom scripting & scheduling', 'Payment & accounting software integration'],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
