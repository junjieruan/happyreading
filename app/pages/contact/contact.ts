import {Component} from '@angular/core';
import {NavController,ViewController,Toast,Modal,Loading,Storage, LocalStorage} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

  public local:any;                                              //定义localstorage

  public user={
     username:"9",
     password:"12",
     headface: "images/c1.jpg"
  }
  constructor(private navCtrl: NavController,private viewCtrl:ViewController) {
    this.navCtrl=navCtrl;
    this.viewCtrl=viewCtrl;
  }

  showFill(){
      if(this.user.username==""){
		  let toast = Toast.create({                               //判断用户名格式正误
		    message: '输入格式不正确',
		    duration: 3000,
		  });
		  this.navCtrl.present(toast);
      }else{
          let loading = Loading.create({                           //loading
		    content: '正在登陆...',
		    spinner: 'dots'
		  });
		  this.navCtrl.present(loading);

          if(this.user.password=="1"){                           //密码正确，loading显示，隐藏本页面
          	 this.local = new Storage(LocalStorage);             //localstorage存储登陆信息
          	 this.local.set('username',this.user.username);
   			 this.local.set('Logined', 'true');
             setTimeout(() => {
			    loading.dismiss();
			  }, 3000);
			this.viewCtrl.dismiss(this.user.username);                 //username通过dismiss传到用户中心
          }else{
             let toast = Toast.create({                          //密码错误
			    message: '密码错误',
			    duration: 3000,
			  });
			  this.navCtrl.present(toast);
          }
      }
  }
}
