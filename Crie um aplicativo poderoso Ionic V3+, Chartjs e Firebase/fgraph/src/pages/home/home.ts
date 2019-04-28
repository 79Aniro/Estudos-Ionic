import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams,LoadingController } from 'ionic-angular';
import{AngularFireDatabase, AngularFireObject} from 'angularfire2/database';


import{Observable} from 'rxjs/Observable';

import{AngularFireList} from 'angularfire2/database';

import{ToastController} from 'ionic-angular/components/toast/toast-controller';

import{Chart} from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:Observable<any[]>;
  ref: AngularFireList<any>;
  refMeta:AngularFireObject<any>;

  unidades=[
    {value:"unidade1",name:"Unidade ES"},
    {value:"unidade2",name:"Unidade SP"},
    {value:"unidade3",name:"Unidade RJ"},
    {value:"unidade4",name:"Unidade BA"}
  ]
//Graficos
  @ViewChild ('graficoCanvas1') graficoCanvas1;
  @ViewChild ('graficoCanvas2') graficoCanvas2;

  objChartJs:any;
  ObjChartJs2:any;
  constructor(public navCtrl: NavController,
  private db:AngularFireDatabase,
  public loadingCtrl:LoadingController) {

  }

}
