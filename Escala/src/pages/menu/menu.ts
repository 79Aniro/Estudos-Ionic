import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PlantaoDTO } from '../../modelos/plantao';
import { StorageProvider } from '../../providers/storage/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';



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
     public localStorage:StorageProvider,
     public localNotifications: LocalNotifications,
     public platform: Platform) {

      
  }

  ionViewDidLoad() {
   
    this.plantoes=this.localStorage.getPlantoes();
    if(this.plantoes.length==0){
     
      this.localStorage.setId(1);
      
    }
  else{

   let i= this.localStorage.getId();
    
    this.localStorage.setId(i+1);
    this.chamaNota();
    
  }

 
   
  }

  inserirPlantao(){

    this.navCtrl.push('InPlantaoPage');
  }

  listaPlantoes(){
    this.navCtrl.push('ListaPlantaoPage');
  }

  chamaNota()
{

  let plantao:PlantaoDTO= this.plantoes[0];
  let texto= "Seu proximo plantão será dia "+plantao.dataString;
  this.platform.ready().then(() => {
    this.localNotifications.schedule({
      title:'Próximo Plantão',
      text: texto,
      trigger: {at: new Date(new Date().getTime() + 1000)},
      led: 'FF0000',
      sound: null,
     
   });
  });
}  

}
