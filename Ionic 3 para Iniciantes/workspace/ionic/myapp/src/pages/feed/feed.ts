import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string="Aniro Montenegro nome do codigo";

  //public nomeUsuario:any="Aniro Montenegro nome do codigo";  any a variavel aceita qualquer coisa
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public somaDoisNumeros(num1:number,num2:number): void{//passando parametros num1 e num2 para a funcao

    alert(num1+num2);

  }


  ionViewDidLoad() {
    this.somaDoisNumeros(10,99);
  }

}
