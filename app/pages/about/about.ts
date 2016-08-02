import {Component} from '@angular/core';
import {NavController,Modal,Storage,LocalStorage,ActionSheet} from 'ionic-angular';
import {AddBook} from'../addbook/addbook';
import {BookDetail} from'../about/bookdetail';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
 
  num;
  public local:any;                               //在localstorage获取http请求并存储的图书信息

  public contacts=[
  {"contactid":"images/1.jpg","contactname":"追风筝的人","contactwriter":"卡勒德·胡赛尼","contactsummary":"追逐梦想的路上"},
  {"contactid":"images/2.jpg","contactname":"老人与海","contactwriter":"海明威","contactsummary":"你可以打倒我但不能打败我"},
  {"contactid":"images/3.jpg","contactname":"格林童话","contactwriter":"安徒生","contactsummary":"童话是现实的写照"}
  ];

  constructor(private navCtrl: NavController) {
       this.navCtrl=navCtrl;

         this.local = new Storage(LocalStorage);                             //获取本地数据插入新增的数组数据中

         this.local.get('num').then((result) => {
             this.num = result;

            for(var i=1;i<=this.num;i++){
                var contactid="";
                var contactname="";
                var contactwriter="";
                var contactsummary="";

               
                this.local.get("image"+i).then((result)=>{
                    contactid=result;
                });
                this.local.get("title"+i).then((result)=>{
                      contactname=result;
                  });
                  this.local.get("summary"+i).then((result)=>{                                   //获取图书概要存入contacts
                      contactsummary=result;
                  });
                this.local.get("autor"+i).then((result)=>{
                      contactwriter=result;
                      var obj=new Contact(contactid,contactname,contactwriter,contactsummary);              //向contacts中push一个新实例
                      this.contacts.push(obj);
                });

            }

        })
  }

  openModal() {
   let modal = Modal.create(AddBook);
   this.navCtrl.present(modal);
 }

 Actionsheet(event,contact){                                                                              //actionsheet组件弹出选择框
    let actionSheet = ActionSheet.create({
    title: '你的选择:',
    buttons: [
      {
        text: '书籍信息',
        handler: () => {
           this.navCtrl.push(BookDetail,{item:contact});                                        //push出详情页,传参contact
        }
      },
      {
        text: '删除条目',                                                                        
        handler: () => {
              this.removeClient(contact);
          }
      },
      {
        text: '取消',
        handler: () => {
        }
      }
    ]
  });
  this.navCtrl.present(actionSheet);
 }


  removeClient(contact){                                                                       //删除条目
      for(var i=0;i<this.contacts.length;i++){
          if(this.contacts[i]==contact){
             this.contacts.splice(i,1);
          }
      }
  }

}

class Contact {                                                 //定义一个新的类

  contactid;
  contactname;
  contactwriter;
  contactsummary;

  constructor( contactid,contactname,contactwriter,contactsummary) {
    this.contactid = contactid;
    this.contactname = contactname;
    this.contactwriter = contactwriter;
    this.contactsummary=contactsummary;
  }
}