import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AtividadeDTO, buildAtividadeDTO } from '../../modelos/atividade';
import { StorageProvider } from '../../providers/storage/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the ListarAtividadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-atividade',
  templateUrl: 'listar-atividade.html',
})
export class ListarAtividadePage {

  lista:AtividadeDTO[]=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public localStorage:StorageProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
    this.lista=this.localStorage.getAtividade();
    if(this.lista!=[]){

      this.ordenaPlantao(this.lista);
    }
  }


  ordenaPlantao(list:AtividadeDTO[]){
    let tam = list.length;
    tam -= 1;
    let plantaoM = buildAtividadeDTO();
    let ind = 0;
    let ind2 = 0;
    if (tam > 1) {

      for (let i = 0; i < tam; i++) {
        let d1 = list[i].data;
        let d2 = list[i + 1].data;
        

        if (d1 > d2) {
          
          plantaoM = list[i]
          list[i] = list[i + 1];
          list[i + 1] = plantaoM;
          plantaoM = buildAtividadeDTO();
          ind = i-1;
          if (ind >= 0) {
            for (let x = ind; x >= 0; x--) {
            
              if (list[x].data > list[x + 1].data) {
               
                plantaoM = list[x]
                list[x] = list[x + 1];
                list[x + 1] = plantaoM;
                plantaoM = buildAtividadeDTO();
              }
              else {
                x = -1;
              }

            }
          }
        
        }
      }
    }

   

    
  }  

  apagarAtividade(item:AtividadeDTO){

    this.showPrompt(item);

  }

  showPrompt(plantao: AtividadeDTO) {
    const prompt = this.alertCtrl.create({
      title: 'Deletar Atividade',
      message: "Deseja apagar atividade?",

      buttons: [

        {
          text: 'Não',
          handler: data => {

          }
        },
        {
          text: 'Sim',
          handler: data => {
        
            let pl:AtividadeDTO[]=[];
            for(let item of this.lista){
              if(item.id!=plantao.id){
                pl.push(item);

              }
            }
          
            this.lista=[];
            this.lista=pl;
            this.localStorage.setAtividade(this.lista);
          }
        },
      ]
    });
    prompt.present();
  }

}
