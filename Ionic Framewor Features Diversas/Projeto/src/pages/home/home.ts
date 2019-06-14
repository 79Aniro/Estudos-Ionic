import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RootPage } from '../root/root';
import { PushPage } from '../push/push';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  openPushPage(){
    this.navCtrl.push(PushPage,{param1:"Olá mundo"})
  }

  openRootPage(){
    this.navCtrl.setRoot(RootPage,{param1:"Olá mundo"})
  }

 
}
