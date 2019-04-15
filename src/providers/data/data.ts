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

  constructor(private storage: Storage) {
    this.storage.get('List').then((list) => {
      this.lists = JSON.parse(list);
    })
  }

  saveItem(newItem) {
    this.storage.set('List', JSON.stringify(this.lists));
  }
}
