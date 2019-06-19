import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantaoDTO, buildPlantao } from '../../modelos/plantao';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the InPlantaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-in-plantao',
  templateUrl: 'in-plantao.html',
})
export class InPlantaoPage {

public plantao :PlantaoDTO=buildPlantao();
dt:Date;
plantonista:string;
cargaHoraria:string;
plantoes:PlantaoDTO[]=[]
id:number;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public localStorage:StorageProvider) {
  }

  ionViewDidLoad() {
   
    this.plantoes=this.localStorage.getPlantoes();
    this.id=this.localStorage.getId();
    
    console.log(this.plantoes)
  }

  gravar(){

   let dat= new Date(this.dt);
    
  this.plantao.data=dat.getTime();
  let dtt= new Date(this.dt);
  this.plantao.dataString=dtt.toLocaleDateString();
  this.plantao.escalado=this.plantonista;
  this.plantao.cargaHoraria=this.cargaHoraria;
  this.plantao.id=this.id;
  this.id=this.id+1;
  this.localStorage.setId(this.id);
  this.plantoes.push(this.plantao);
  this.plantao=buildPlantao()
  this.localStorage.setPlantoes(this.plantoes)
  this.navCtrl.setRoot(this.navCtrl.getActive().component);
  
    
  }

}
