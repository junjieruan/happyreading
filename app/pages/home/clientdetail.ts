import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/clientdetail.html'
})
export class ClientDetail{
    item;                                                     //先定义item

  constructor(private params: NavParams) {                    //Navparams传参
     this.item=this.params.get("item");
  }

 
}
