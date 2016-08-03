import {Component} from '@angular/core';
import {NavController,ViewController,Toast,Modal,Storage,LocalStorage,ActionSheet} from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/register/register.html'
})
export class Register {
  
  public local:any;
  public register={
      Rusername:"",
      Rpassword:"",
      Rheadface:"images/c1.jpg",
      birthDay: "1990-01-10"
  }

  constructor(private navCtrl: NavController,private viewCtrl:ViewController) {
    this.navCtrl=navCtrl;
    this.viewCtrl=viewCtrl;
  }
 
 registering(){
      if(this.register.Rusername.length ==3 &&this.register.Rpassword.length== 4){    
                                                                                                           //输入信息完成注册
         this.local = new Storage(LocalStorage);
         this.local.set('username',this.register.Rusername);
         this.local.set('password',this.register.Rpassword);
         this.local.set('headface',this.register.Rheadface);
          let toast = Toast.create({
		    message: '注册成功！',
		    duration: 3000,
		  });
		  this.navCtrl.present(toast);
      }else{
         let toast = Toast.create({
		    message: '格式错误',
		    duration: 3000,
		  });
		  this.navCtrl.present(toast);
	  }
  }


  UploadImg(){                                                                                //拍照还是选择图片
  let actionSheet = ActionSheet.create({
      buttons: [
        {
          text: '选取图片',
          handler: () => {
            this.checkImg();
          }
        }, {
          text: '拍照',
          handler: () => {
            this.takePhoto();
          }
        }, {
          text: '取消',
          role: 'cancel'
        }
      ]
    });
    this.navCtrl.present(actionSheet);
}

  checkImg(){                                                                              //图库中选择图片
   var options = {maximumImagesCount: 1};

    ImagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          this.register.Rheadface = results[i];
        }
    },(err)=>{
          alert("error");
    });
  }

  takePhoto(){                                                                              //拍照
   let options = {
      //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
      quality: 100,                                            //相片质量0-100
      destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
      sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
      allowEdit: false,                                        //在选择之前允许修改截图
      encodingType: Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
      targetWidth: 200,                                        //照片宽度
      targetHeight: 200,                                       //照片高度
      mediaType: 0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
      cameraDirection: 0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
      saveToPhotoAlbum: true                                   //保存进手机相册
    };
    Camera.getPicture(options).then((imageData) => {
      this.register.Rheadface = "data:image/jpeg;base64," + imageData;
    },(err) => {
      console.log(err);
});
  }
  dismiss(){
      this.viewCtrl.dismiss();
  }
}

