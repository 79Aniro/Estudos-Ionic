import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViaturaDTO, buildViaturaDto } from '../../modelos/viatura';
import { UteisProvider } from '../../providers/uteis/uteis';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';

/**
 * Generated class for the RevisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revisao',
  templateUrl: 'revisao.html',
})
export class RevisaoPage {

  viatura:ViaturaDTO=buildViaturaDto();
  patrimonio:string="";
  placa:string="";
  ultimaRevisao:Date=null;
  observacao:string='';
  km:number=0;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public localStorage:StorageServiceProvider) {
  }

  ionViewDidLoad() {
    this.viatura=this.navParams.get('item');
    this.patrimonio=this.viatura.patrimonio;
    this.placa=this.viatura.placa;
    this.km=this.viatura.kilometragem;
    
  }

  gravar(){
    let d = new Date(this.ultimaRevisao);
    d.setHours(24);
    let dd=new Date(d);
    dd.setHours(4320);
    this.viatura.ultimaRevisao=d;
    this.viatura.ultimaRevisaoTexto=d.toLocaleDateString();
    this.viatura.proximaRevisao=dd;
    this.viatura.proximaRevisaoTexto=dd.toLocaleDateString();
    this.viatura.kilometragem=this.km;
    this.viatura.ultimaRevisaoKm=this.km;
    this.viatura.proximaRevisaoKm=this.km+10000;
    this.viatura.observacao=this.observacao;

    this.localStorage.updateViatura(this.viatura);

    this.navCtrl.pop();
  }

}
