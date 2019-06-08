import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams,LoadingController } from 'ionic-angular';
import{AngularFireDatabase, AngularFireObject} from 'angularfire2/database';


import{Observable} from 'rxjs/Observable';

import{AngularFireList} from 'angularfire2/database';

import{ToastController} from 'ionic-angular/components/toast/toast-controller';

import{Chart} from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:Observable<any[]>;
  ref: AngularFireList<any>;
  refMeta:AngularFireObject<any>;

  unidades=[
    {value:"unidade1",name:"Unidade ES"},
    {value:"unidade2",name:"Unidade SP"},
    {value:"unidade3",name:"Unidade RJ"},
    {value:"unidade4",name:"Unidade BA"}
  ]
//Graficos
  @ViewChild ('graficoCanvas1') graficoCanvas1;
  @ViewChild ('graficoCanvas2') graficoCanvas2;

  objChartJs:any;
  ObjChartJs2:any;
  chartData=null;
  constructor(public navCtrl: NavController,
  private db:AngularFireDatabase,
  public loadingCtrl:LoadingController) {

  }

  coletarValoresGrafico(){

    let acumuladoPorUnidade={

      "unidade1":null,
      "unidade2":null,
      "unidade3":null,
      "unidade4":null

    }

    for(let venda of this.chartData){
      acumuladoPorUnidade[venda.unidade]+=venda.valor;
    }

    return Object.keys(acumuladoPorUnidade).map(a=>acumuladoPorUnidade[a]);
  }

  criarGrafico(data){

  }

  atualizarGrafico(data){

    //Atualizei atributo do controller
    this.chartData=data;

    //Calculo dos valores e armazena
    let chartData= this.coletarValoresGrafico();

    //Atualização valores chartJs
    this.objChartJs.data.datasets.forEach((dataset)=>{
      dataset.data=chartData;
    });
    this.ObjChartJs2.data.datasets.forEach((dataset)=>{
      dataset.data=chartData;
    });

    this.objChartJs.update();
    this.ObjChartJs2.update();
  }

  ionViewDidLoad(){

    let loader= this.loadingCtrl.create({
      content:"Aguarde ...",
      duration:3000
    });

    loader.present();

    this.ref=this.db.list("vendas");

    this.ref.valueChanges().subscribe(result=>{

      //Retira o aguarde
      loader.dismiss();

      //Se existe dados eu atualizo ,senão eu crio

      if(this.chartData){
        this.atualizarGrafico(result);
      }
      else{
        this.criarGrafico(result);
      }
    })
  }

}
