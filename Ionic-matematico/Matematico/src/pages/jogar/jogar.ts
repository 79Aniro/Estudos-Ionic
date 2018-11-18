import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the JogarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogar',
  templateUrl: 'jogar.html',
})
export class JogarPage {
  pontos: number = 0;
  num1: number=0;
  num2: number=0;
  numero1:number;
  numero2:number;
  resultado: number;
  aleatorio: number;
  aleatorio_opcao: number;
  numeros: number[];
  sequencia_opcoes: number;
  operacao:string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl: ToastController) {
      
  }

  ionViewDidLoad() {
   this.criarNumeros();
  
   
  
  }

  itemSelected(item:number){

    if(item==this.resultado){
      this.presentToastAcertou();
      this.criarNumeros();
      this.pontos=this.pontos+1
     
    }
    else{
      this.presentToastErrou();
      this.criarNumeros();
     
    }

  }

  criarNumeros(){
    this.num1 = Math.floor(Math.random() * 99);
    this.num2 = Math.floor(Math.random() * 99);
    this.numero1=this.num1;
    this.numero2=this.num2;

    this.sequencia_opcoes = Math.floor(Math.random() * 4 + 1);
    
    if (this.sequencia_opcoes == 1) {
      this.resultado=this.numero1+this.numero2;
      this.operacao='+';
     
    }
    else if(this.sequencia_opcoes == 2){
      this.resultado=this.numero1-this.numero2;
      this.operacao='-';
     
    }
    else if(this.sequencia_opcoes == 3){
      this.resultado=Math.floor(this.numero1/this.numero2);
      this.operacao='/';
    }

    else {
      this.resultado=this.numero1*this.numero2;
      this.operacao='x';
    }

   
    this.numeros=[];
    for (var _i = 0; _i < 4; _i++) {
      var num = this.num1 = Math.floor(Math.random() * 9);
      if(num!=this.resultado){
       var x= this.numeros.push(this.resultado-num);
      }
      else{
        _i=_i-1;
      }
      
  }

  this.aleatorio=Math.floor(Math.random() * 4);
  this.numeros[this.aleatorio]=this.resultado;
  
  }

  presentToastAcertou() {
    const toast = this.toastCtrl.create({
      message: 'Acerto Miseravi',
      position: 'middle',      
      duration: 1500
    });
    toast.present();
  
  }

  presentToastErrou() {
    const toast = this.toastCtrl.create({
      message: 'Errou Miseravi',
      position: 'middle',
      duration: 1500
    });
    toast.present();
    
  }

  }


