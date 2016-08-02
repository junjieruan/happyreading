import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/saying/saying.html'
})
export class Saying{                            

  constructor(private navCtrl:NavController,private viewCtrl:ViewController) {                    //Navparams传参
     this.navCtrl=navCtrl;
     this.viewCtrl=viewCtrl;
  }

  
}
