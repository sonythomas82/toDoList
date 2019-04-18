import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newItem: any;
  constructor(public navCtrl: NavController, public data: DataProvider) {

  }

  /**
   * Method to add new item to the list 
   * and call saveItem method in data provider to save to localStorage
   */
  addItem() {
    if (this.newItem != "" && this.data.lists != null) {
      this.data.lists[this.data.lists.length] = { item: this.newItem };
    }
    this.newItem = "";
    this.data.saveItem();
  }

  /**
   * Method to remove item from list using index number 
   * and call saveItem method in data provider to save to localStorage
   */
  removeItem(index) {
    this.data.lists.splice(index, 1);
    this.data.saveItem();
  }

  /**
   * Method to clear localStorage
   */
  clearStorage(){
    this.data.clearList();
  }
}
