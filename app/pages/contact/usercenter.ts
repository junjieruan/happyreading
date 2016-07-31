import {Component} from '@angular/core';
import {NavController,Storage, LocalStorage,Modal} from 'ionic-angular';
import {ContactPage} from'../contact/contact';

@Component({
  templateUrl: 'build/pages/contact/usercenter.html'
})
export class UserCenter {
  public local:any;
  public user={
     username:"9",
     password:"12",
     headface: "images/c1.jpg"
  }
  constructor(private navCtrl: NavController) {
     this.navCtrl=navCtrl;
	  this.local = new Storage(LocalStorage);             //localstorage获取存储信息
	  this.local.get('Logined').then((result)=>{
	       if(result=="true"){                                              //已登录。显示登录信息
                this.local.get('username').then((result)=>{                 //按username控制头像的显示
                     if(result=="c1"||result=="c2"||result=="c3"){
                         this.user.headface="images/"+result+".jpg";
                     }else{
                         this.user.headface="images/c1.jpg";
                     }
                              
                })
	       }else{
	           let modal = Modal.create(ContactPage);                       //未登陆状态，返回登陆页面
	           this.navCtrl.present(modal);
	           modal.onDismiss(data => {                                    //接收dismiss传过来的data
			     this.user.headface="images/"+data+".jpg";
			   });
	       }
	  });
   }

   logout(){                                                                  //注销事件
       this.local = new Storage(LocalStorage);                               //localstorage置空登陆信息
       this.local.set('username','');
   	   this.local.set('Logined', '');
   	   let modal = Modal.create(ContactPage);                                //返回登陆页面
	   this.navCtrl.present(modal);
	     modal.onDismiss(data => {                                    
			     this.user.headface="images/"+data+".jpg";
			   });
   }
}
