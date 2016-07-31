import {Component} from '@angular/core';
import {NavController,Modal} from 'ionic-angular';
import {AddBook} from'../about/addbook';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {

  public contacts=[
  {"contactid":1,"contactname":"追风筝的人","contactwriter":"卡勒德·胡赛尼"},
  {"contactid":2,"contactname":"老人与海","contactwriter":"海明威"},
  {"contactid":3,"contactname":"格林童话","contactwriter":"安徒生"}
  ];

  constructor(private navCtrl: NavController) {
       this.navCtrl=navCtrl;
  }

  openModal() {
   let modal = Modal.create(AddBook);
   this.navCtrl.present(modal);
 }
}
