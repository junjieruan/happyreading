import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ClientDetail} from'../home/clientdetail';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
 public clients=[
        {"clientid":"c1","clientname":"张三","clienttext":"213124123"},
        {"clientid":"c2","clientname":"李四","clienttext":"00000000"},
        {"clientid":"c3","clientname":"王五","clienttext":"1313131313"}
      ]

  constructor(private navCtrl: NavController) {
     this.navCtrl=navCtrl;
  }

  itemClick(event,client){
      this.navCtrl.push(ClientDetail,{item:client});                 //传event进来，点击时，加载对应的详细列表页，把client传给item
  }

  removeClient(client){
  		for(var i=0;i<this.clients.length;i++){
  		    if(this.clients[i]==client){
  		       this.clients.splice(i,1);
  		    }
  		}
  }
}
