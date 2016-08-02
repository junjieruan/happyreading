import {Component} from '@angular/core';
import {NavController,ViewController,Modal,Storage,LocalStorage,Toast} from 'ionic-angular';
import {Http} from'@angular/http';

@Component({
  templateUrl: 'build/pages/addbook/addbook.html'
})
export class AddBook {
 
  num=0;
  public local:any;
 
  public newbook={
      title:"",
      author:""
  }

  constructor(public navCtrl:NavController,public viewCtrl: ViewController,public http:Http) {
       this.viewCtrl=viewCtrl;
       this.http=http;
       this.navCtrl=navCtrl;
  }
  dismiss(){
      this.viewCtrl.dismiss();
    }

  searchbook(){
       this.http.get("https://api.douban.com/v2/book/search?tag="+this.newbook.title)       
       .subscribe(data=>{
             this.num++;                                    //给每次请求存储的数据分配序号，利用批量存储
             let json = JSON.parse(data["_body"]);
                 this.local = new Storage(LocalStorage);          //http请求图书API，根据response的
                 this.local.set('num', this.num);
				         this.local.set("title"+this.num, json.books[0].title);
                 this.local.set("autor"+this.num, json.books[0].author);
                 this.local.set("image"+this.num, json.books[0].images.small);
                 this.local.set("summary"+this.num, json.books[0].summary);                          //图书概要
       },error=>{
               let toast = Toast.create({                      
                message: "查找失败！",
                duration: 3000
               })
               this.navCtrl.present(toast);
    })
}}
