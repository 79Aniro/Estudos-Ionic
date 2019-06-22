import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantaoDTO, buildPlantao } from '../../modelos/plantao';
import { StorageProvider } from '../../providers/storage/storage';
import { UsuarioDTO, buildUsuarioDTO } from '../../modelos/usuario-dto';

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
dttroca:Date;
plantonista:string;
cargaHoraria:string;
plantoes:PlantaoDTO[]=[]
id:number;
troca:string='false';
novoEscalado:string
abreNovoEsc:number=0;
abreNovaData:number=0;
trocadoV:string
cargaHorariaNV:string
comQuem:string="";
us=buildUsuarioDTO();
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public localStorage:StorageProvider) {
  }

  ionViewDidLoad() {
   
    this.plantoes=this.localStorage.getPlantoes();
    this.id=this.localStorage.getId();
    this.us=this.localStorage.getUsuario();
    this.plantonista=this.us.apelido;
    
    console.log(this.plantoes)
  }

  gravar(){

   let dat= new Date(this.dt);
 
   let dat2=dat.setHours(24);
   let dat3= new Date(dat2);
    console.log(dat3)
  this.plantao.data=dat2;
 
  this.plantao.dataString=dat3.toLocaleDateString();
 this.plantao.escalado=this.us.apelido;
 this.plantao.id=this.id++;
 this.plantao.cargaHoraria=this.cargaHoraria;
 this.plantao.troca=this.troca;
 if(this.troca=="true"){
  this.plantao.trocaTexto="Sim";
 }
 else{
  this.plantao.trocaTexto="Não";
 }
 

 this.plantao.comQuem=this.comQuem;


 this.plantoes.push(this.plantao);
 this.localStorage.setPlantoes(this.plantoes);
 this.localStorage.setId(this.id);
 this.navCtrl.setRoot(this.navCtrl.getActive().component);

    
  }
  abreNovoEscalado(){

    this.abreNovoEsc=1;
   
  }
  fechaNovoEscalado(){

    this.abreNovoEsc=0;
   
  }
  abreNovaDataS(){
    this.abreNovaData=1
  }

  fechaNovaDataS(){
    this.abreNovaData=0;
  }

}
