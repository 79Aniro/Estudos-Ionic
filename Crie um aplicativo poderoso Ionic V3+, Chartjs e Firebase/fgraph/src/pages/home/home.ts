import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import{AngularFireDatabase} from 'angularfire2/database';


import{Observable} from 'rxjs/Observable';

import{AngularFireList} from 'angularfire2/database';

import{ToastController} from 'ionic-angular/components/toast/toast-controller'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
