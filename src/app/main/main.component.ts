import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'underscore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient) { }

  allItems: any[];

  page: number = 1;
  count: number = 0;

  itemBrands = [
     {name: "Apple", selected: false},
     {name: "Asus", selected: false},
     {name: "Dell", selected: false},
     {name: "Huawei", selected: false},
     {name: "Samsung", selected: false},
  ];

  itemCPUs = [
    {name: "Intel Core i7", selected: false},
    {name: "Intel Core i5", selected: false},
    {name: "Intel Core i3", selected: false},
  ]

  itemRAM = [
    {name: "8GB", selected: false},
    {name: "16GB", selected: false},
    {name: "32GB", selected: false},
  ]

  itemScreenSize = [
    {name: "13''", selected: false},
    {name: "14''", selected: false},
    {name: "15''", selected: false},
  ]

  ngOnInit(): void {
    this.http.get('../../assets/data.json').subscribe(data => {
      this.allItems = data as any;
    });
  }

  onDataChange(event){
    this.page = event
  }

  get selectedItemBrands() {
    return this.itemBrands.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }

  get selectedItemCPUs() {
    return this.itemCPUs.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }

  get selectedItemRAMs() {
    return this.itemRAM.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }

  get selectedItemScreenSize() {
    return this.itemScreenSize.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }


}
