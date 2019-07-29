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

plantonista:string='';
cargaHoraria:string;
plantoes:PlantaoDTO[]=[]
id:number;
observacao:string;
troca:string='';
isEscalado:string='';
novoEscalado:string='';
velhoEscalado:string='';


us=buildUsuarioDTO();
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public localStorage:StorageProvider) {
  }

  ionViewDidLoad() {
   
    this.plantoes=this.localStorage.getPlantoes();
    this.id=this.localStorage.getId();
    this.us=this.localStorage.getUsuario();
    this.plantonista=this.us.nome
    
    
  }

  gravar(){

   let dat= new Date(this.dt);
 
   let dat2=dat.setHours(24);
   let dat3= new Date(dat2);
  
  this.plantao.data=dat2;
  this.plantao.dataString=dat3.toLocaleDateString()+" --- "+this.definirDiaSemana(dat3.getDay());
  this.plantao.escalado=this.us.nome
 
 this.plantao.cargaHoraria=this.cargaHoraria;
 this.plantao.observacao=this.observacao;

 if(this.troca=='sim'){
  this.plantao.troca=this.troca;

  if(this.isEscalado=='sim'){
    this.plantao.isEscalado='sim';
    this.plantonista=this.us.nome
    this.plantao.novoEscalado=this.novoEscalado;
    this.plantao.vouFazerOutro='';
    this.plantao.outroFazParaMim='sim';
  }
  else{
    this.plantao.escalado=this.velhoEscalado;
    this.plantao.velhoEscalado=this.velhoEscalado;
    this.plantao.novoEscalado='Você';
    this.plantao.isEscalado='não';
    this.plantao.vouFazerOutro='sim';
    this.plantao.outroFazParaMim='';
  }
 }
 

 
 

 

this.plantao.id=this.id++;


 this.plantoes.push(this.plantao);
 this.localStorage.setPlantoes(this.plantoes);
 this.localStorage.setId(this.id);
 this.navCtrl.setRoot(this.navCtrl.getActive().component);

    
  }


  /**
 * Define o dia da semana conforme codigo informado
 * @param dia 
 * @returns string
 */
definirDiaSemana(dia: number) {
  switch (dia) {
    case 0:
      return "  Dom";
    case 1:
      return "  Seg";
    case 2:
      return "  Ter";
    case 3:
      return "  Qua";
    case 4:
      return "  Qui";
    case 5:
      return "  Sex";
    case 6:
      return "  Sab";
  }
}

  

}
