import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/bookdetail.html'
})
export class BookDetail{
    item;                                                     //先定义item

  constructor(private params: NavParams,private navCtrl:NavController) {                    //Navparams传参
     this.item=this.params.get("item");
     this.navCtrl=navCtrl;
  }

 
}
