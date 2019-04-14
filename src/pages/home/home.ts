import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // homelists: any;
  newItem: any;
  constructor(public navCtrl: NavController, public data: DataProvider) {

  }

  // ionViewDidLoad() {
    // this.homelists = this.data.lists;
  // }

  addItem() {
    if (this.newItem != "") {
      // console.log('Befoore:' +JSON.stringify(this.data.lists));
      this.data.lists[this.data.lists.length] = { item: this.newItem };
      this.newItem = "";
      this.data.saveItem(this.newItem);
    }
  }
}
