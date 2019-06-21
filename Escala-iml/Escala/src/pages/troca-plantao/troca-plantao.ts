import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantaoDTO, buildPlantao } from '../../modelos/plantao';
import { StorageProvider } from '../../providers/storage/storage';



@IonicPage()
@Component({
  selector: 'page-troca-plantao',
  templateUrl: 'troca-plantao.html',
})
export class TrocaPlantaoPage {

  plantoes:PlantaoDTO[]=[]
  plantao:PlantaoDTO=buildPlantao();
  cargaHorariaN:string;
  ch:string
  dttroca:Date;
  plantonistaN:string;
  abreNovaData:number=0;
  idref=0;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public localStorage:StorageProvider) {
  }

  ionViewDidLoad() {
    this.plantoes=this.localStorage.getPlantoes();

   
    
    this.idref=this.localStorage.getId();

    this.plantao=this.navParams.get('plantao');
    this.ch=this.plantao.cargaHoraria;
    if(this.ch!="24 horas"){
      
      this.cargaHorariaN=this.ch;
    }
   
    console.log(this.plantao);
    console.log(this.plantoes);

  }

  trocar(){

    let dt= new Date(this.dttroca);
    if(this.cargaHorariaN==this.plantao.cargaHoraria){

      console.log("carga horaria iguais")
      
      this.plantao.novoEscalado=this.plantonistaN;
      console.log(this.plantonistaN);
      let tam= this.plantoes.length;

      for(let i=0;i<tam;i++){

        if(this.plantoes[i].id==this.plantao.id){

          this.plantoes[i].novoEscalado=this.plantao.novoEscalado;
          this.plantoes[i].troca='true';
          this.plantoes[i].trocaTexto='Sim';
          break;
        }
      }

      this.localStorage.setPlantoes(this.plantoes);

     
      
    }
    else
    if(this.plantao.cargaHoraria=='24 horas' && this.cargaHorariaN=='12 Horas Diurna'){

      let plantaoD:PlantaoDTO=buildPlantao();
      let plantaoN:PlantaoDTO=buildPlantao();

      plantaoD.escalado=this.plantao.escalado;
      plantaoD.id=this.idref++;
      plantaoD.cargaHoraria="12 Horas Diurna";
      plantaoD.novoEscalado=this.plantonistaN;
      let dt= new Date(this.plantao.data)
      plantaoD.data=this.plantao.data;
      plantaoD.dataString=dt.toLocaleDateString();
      plantaoD.troca='true'
      plantaoD.trocaTexto='Sim';

      this.plantoes.push(plantaoD);


      plantaoN.escalado=this.plantao.escalado;
      plantaoN.id=this.idref++;
      plantaoN.cargaHoraria="12 Horas Noturna";
      plantaoN.novoEscalado="";
      plantaoN.data=this.plantao.data;
      let dtt= new Date(this.plantao.data)
      plantaoN.dataString=dtt.toLocaleDateString();
      plantaoN.troca='false'
      plantaoN.trocaTexto='Não';
      this.plantoes.push(plantaoN);

      let list:PlantaoDTO[]=[]
      for(let item of this.plantoes){

        if(item.id!=this.plantao.id){

          list.push(item);
        }
        
        }
      
        this.plantoes=[];
        this.plantoes=list;
        this.localStorage.setId(this.idref);
        this.localStorage.setPlantoes(this.plantoes);

    }
    else
    if(this.plantao.cargaHoraria=='24 horas' && this.cargaHorariaN=="12 Horas Noturna"){

      let plantaoD:PlantaoDTO=buildPlantao();
      let plantaoN:PlantaoDTO=buildPlantao();

      plantaoD.escalado=this.plantao.escalado;
      plantaoD.id=this.idref++;
      plantaoD.cargaHoraria="12 Horas Noturna";
      plantaoD.novoEscalado=this.plantonistaN;
      let dt= new Date(this.plantao.data)
      plantaoD.data=this.plantao.data;
      plantaoD.dataString=dt.toLocaleDateString();
      plantaoD.troca='true'
      plantaoD.trocaTexto='Sim';

      this.plantoes.push(plantaoD);


      plantaoN.escalado=this.plantao.escalado;
      plantaoN.id=this.idref++;
      plantaoN.cargaHoraria="12 Horas Diurna";
      plantaoN.novoEscalado="";
      plantaoN.data=this.plantao.data;
      let dtt= new Date(this.plantao.data)
      plantaoN.dataString=dtt.toLocaleDateString();
      plantaoN.troca='false'
      plantaoN.trocaTexto='Não';
      this.plantoes.push(plantaoN);

      let list:PlantaoDTO[]=[]
      for(let item of this.plantoes){

        if(item.id!=this.plantao.id){

          list.push(item);
        }
        
        }
      
        this.plantoes=[];
        this.plantoes=list;
        this.localStorage.setId(this.idref);
        this.localStorage.setPlantoes(this.plantoes);

    }

    this.navCtrl.push('ListaPlantaoPage')
  }

  abreNovaDataS(){
    this.abreNovaData=1
  }

  fechaNovaDataS(){
    this.abreNovaData=0;
  }

}
