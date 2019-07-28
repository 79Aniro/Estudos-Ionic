import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PlantaoDTO, buildPlantao } from '../../modelos/plantao';
import { StorageProvider } from '../../providers/storage/storage';



@IonicPage()
@Component({
  selector: 'page-lista-plantao',
  templateUrl: 'lista-plantao.html',
})
export class ListaPlantaoPage {

  plantoes: PlantaoDTO[] = []
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public localStorage: StorageProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.plantoes = this.localStorage.getPlantoes();

    this.ordenaPlantao(this.plantoes);
    }

  

  detalhePlantao(plantao:PlantaoDTO) {

    this.showPrompt(plantao);
  }

  showPrompt(plantao: PlantaoDTO) {
    const prompt = this.alertCtrl.create({
      title: 'Deletar plantão',
      message: "Deseja apagar plantão?",

      buttons: [

        {
          text: 'Não',
          handler: data => {

          }
        },
        {
          text: 'Sim',
          handler: data => {
            console.log(plantao)
            let pl:PlantaoDTO[]=[];
            for(let item of this.plantoes){
              if(item.id!=plantao.id){
                pl.push(item);

              }
            }
            console.log(pl);
            this.plantoes=[];
            this.plantoes=pl;
            this.localStorage.setPlantoes(this.plantoes);
          }
        },
      ]
    });
    prompt.present();
  }

  ordenaPlantao(list:PlantaoDTO[]){
    let tam = this.plantoes.length;
    tam -= 1;
    let plantaoM = buildPlantao();
    let ind = 0;
    let ind2 = 0;
    if (tam > 1) {

      for (let i = 0; i < tam; i++) {
        let d1 = this.plantoes[i].data;
        let d2 = this.plantoes[i + 1].data;
        console.log(d1 + " " + d2)

        if (d1 > d2) {
          console.log(d1 + " " + d2)
          plantaoM = this.plantoes[i]
          this.plantoes[i] = this.plantoes[i + 1];
          this.plantoes[i + 1] = plantaoM;
          plantaoM = buildPlantao();
          ind = i-1;
          if (ind >= 0) {
            for (let x = ind; x >= 0; x--) {
            
              if (this.plantoes[x].data > this.plantoes[x + 1].data) {
               
                plantaoM = this.plantoes[x]
                this.plantoes[x] = this.plantoes[x + 1];
                this.plantoes[x + 1] = plantaoM;
                plantaoM = buildPlantao();
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
    
  

  }
