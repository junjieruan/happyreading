import {Component} from '@angular/core';
import {NavController,Storage, LocalStorage,Modal} from 'ionic-angular';
import {ContactPage} from'../contact/contact';

@Component({
  templateUrl: 'build/pages/usercenter/usercenter.html'
})
export class UserCenter {
  public local:any;
  public user={
     username:"9",
     password:"12",
     headface: ""
  }
  constructor(private navCtrl: NavController) {
     this.navCtrl=navCtrl;
	  this.local = new Storage(LocalStorage);             //localstorage获取存储信息
	  this.local.get('Logined').then((result)=>{
	       if(result=="true"){                                              //已登录。显示登录信息
                this.local.get('username').then((result)=>{                 //在本地获取username并在界面中显示
                     this.user.username=result;        
                })
                this.local.get('headface').then((result)=>{                 //已登录后刷新  仍可获得头像
                     this.user.headface=result;        
                })
	       }else{
	           let modal = Modal.create(ContactPage);                       //未登陆状态，返回登陆页面
	           this.navCtrl.present(modal);
	           modal.onDismiss(data => {                                    //接收dismiss传过来的data
              this.local.get('username').then((result)=>{                 //在本地获取username并在界面中显示
                     this.user.username=result;        
                })
			          this.local.get('headface').then((result)=>{                 //同步刷新 获取本地存储的头像图片，并显示
                     this.user.headface=result;        
                })
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
        this.local.get('username').then((result)=>{                 //在本地获取username并在界面中显示
                     this.user.username=result;        
                })                              
			    this.local.get('headface').then((result)=>{                 //获取本地存储的头像图片，并显示
                     this.user.headface=result;        
                })
			   });
   }

}
