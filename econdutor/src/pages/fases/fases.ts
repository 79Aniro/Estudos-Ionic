import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FasesDTO, buildFaseDTO } from '../../modelos/fases-dto';


import { FaseBaseDTO } from '../../modelos/fase_base';
import { StorageProvider } from '../../providers/storage/storage';
import { FasesProvider } from '../../providers/fases/fases';


/**
 * Generated class for the FasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fases',
  templateUrl: 'fases.html',
})
export class FasesPage {

  lista:any[]=[];
  faseMatriz:FasesDTO= buildFaseDTO();
  list:FaseBaseDTO[]=[];


  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public localStorage: StorageProvider,
     public faseProvider:FasesProvider) {

  }

  ionViewDidLoad(){

this.faseProvider.buscaFases(2572).
subscribe(response=>{
   this.list =response;
  for(var item of this.list){
   var d=new Date(item.inicio);
   var dd=new Date(item.fim);  
   
   
    this.faseMatriz.titulo=item.tipoFase.nome
    this.faseMatriz.inicio='Iniciada em '+d.toLocaleDateString();
    if(item.fim==null){
      this.faseMatriz.final='';
      this.faseMatriz.icone='remove-circle'
    }
    else{
      this.faseMatriz.final='Finalizada em '+dd.toLocaleDateString();
      this.faseMatriz.icone='checkmark-circle'
    }

    this.lista.push(this.faseMatriz)    
    this.faseMatriz= buildFaseDTO();
  }
})


  }

}
