import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists:any =[
    {item: "Milk"},
    {item: "Cheese"},
    {item: "Bread"},
    {item: "Egg"}
  ]
  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
