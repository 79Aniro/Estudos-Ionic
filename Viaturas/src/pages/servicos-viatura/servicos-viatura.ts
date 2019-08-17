import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams } from 'ionic-angular';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { ViaturaDTO } from '../../modelos/viatura';
import { ActionSheetController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-servicos-viatura',
  templateUrl: 'servicos-viatura.html',
})
export class ServicosViaturaPage {

  viaturas:ViaturaDTO[]=[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public localStorege:StorageServiceProvider,
     public actionSheetCtrl: ActionSheetController,
     public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.viaturas=this.localStorege.getViaturarAll();
    console.log(this.viaturas);
  
  }


  itemSelected(item:ViaturaDTO){

    
    this.presentActionSheet(item);

  }

  presentActionSheet(item:ViaturaDTO) {
    const actionSheet = this.actionSheetCtrl.create({
      title: "",
      cssClass: 'myPage',
      
      buttons: [
        {
          text: 'Revisão',
          cssClass: 'myActionSheetBtnStyle',
          
          handler: () => {
          
            this.navCtrl.push('RevisaoPage',{item:item})
          }
        },
        
        {
          text: 'Pneus',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
