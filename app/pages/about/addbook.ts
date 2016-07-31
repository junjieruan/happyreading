import {Component} from '@angular/core';
import {NavController,ViewController,Modal} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/addbook.html'
})
export class AddBook {

  constructor(public viewCtrl: ViewController) {
       this.viewCtrl=viewCtrl;
  }
  dismiss(){
      this.viewCtrl.dismiss();
    }
}
