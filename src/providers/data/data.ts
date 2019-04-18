import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists: any;

  /**
   * Gets list items from localStorage and parse to JSON format
   */
  constructor(private storage: Storage) {
    this.storage.get('List').then((list) => {
      if (list != null) {
        this.lists = JSON.parse(list);
      }
      else {
        this.lists = [];
      }
    })
  }

  /**
   * Saving list items to localStorage after converting JSON to string
   */
  saveItem() {
    this.storage.set('List', JSON.stringify(this.lists));
  }

  clearList(){
    this.storage.remove('List');
    this.lists = [];
  }
}
