import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantaoDTO } from '../../modelos/plantao';
import { StorageProvider } from '../../providers/storage/storage';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  public plantoes:PlantaoDTO[]=[]
  id:number;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public localStorage:StorageProvider) {
  }

  ionViewDidLoad() {
    this.plantoes=this.localStorage.getPlantoes();
    if(this.plantoes.length==0){
     
      this.localStorage.setId(1);
      
    }
  else{

   let i= this.localStorage.getId();
    
    this.localStorage.setId(i+1);
    
  }

 
   
  }

  inserirPlantao(){

    this.navCtrl.push('InPlantaoPage');
  }

  listaPlantoes(){
    this.navCtrl.push('ListaPlantaoPage');
  }

}
