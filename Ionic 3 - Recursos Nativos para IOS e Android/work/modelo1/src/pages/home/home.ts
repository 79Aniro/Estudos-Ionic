import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image:string;
  constructor(public navCtrl: NavController,
    private camera: Camera) {

  }
// API MAPS CHAVE AIzaSyAX6PJC6w43zd202rLtT2fGE5dLhi3i2y0

// ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyAX6PJC6w43zd202rLtT2fGE5dLhi3i2y0" --variable API_KEY_FOR_IOS="AIzaSyAX6PJC6w43zd202rLtT2fGE5dLhi3i2y0"
  abrirCamera(){

    let config:CameraOptions={
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(config).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

}
