import 'es6-shim';
import {Component,ViewChild} from '@angular/core';
import {App, Platform, ionicBootstrap,MenuController,Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/home/home';              //导入下面跳转需要用到的页面模块            
import {AboutPage} from './pages/about/about';
import {ContactPage} from './pages/contact/contact';
import {UserCenter} from './pages/usercenter/usercenter';
import {Saying} from'./pages/saying/saying';
import { LocalNotifications } from 'ionic-native';


@Component({
  templateUrl:'build/app.html'
})
export class MyApp {
    @ViewChild(Nav) nav:Nav;                                          //定义nav

  // make HelloIonicPage the root (or first) page
  public rootPage: any=TabsPage;
  pages:Array<{title:string,component:any}>;

  constructor(private platform: Platform,private menu:MenuController) {
    
    this.pages = [
    {title:'主页',component: AboutPage},     //定义pages数组，显示在侧边栏中，用于后续点击侧边栏跳转到某个页面
    { title: '我的好友', component: HomePage },
    { title: '用户中心', component: UserCenter },
    { title: '反馈', component: Saying }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      LocalNotifications.schedule({                                        //本地化提醒
       text: '大哥你家的猪跑出来了！快抓回去',
       at: new Date(new Date().getTime() + 10000),
      });
    });
  }
  
  openPage(page){                                             //侧边栏指向指定Page
       this.menu.close();
       this.nav.setRoot(page.component);
  }

}

ionicBootstrap(MyApp);
