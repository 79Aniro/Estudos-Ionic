import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {


  public objeto = {//criando objeto JSON para ser consumido na pagina
    titulo: "Nome Titulo",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine...out of a DeLorean?! Whoa. This is heavy",
    quant_likes: 12,
    quant_coment: 4,
    time_coment: "11h ago"


  }
  public nomeUsuario: string = "Aniro Montenegro nome do codigo";

  //public nomeUsuario:any="Aniro Montenegro nome do codigo";  any a variavel aceita qualquer coisa
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  public somaDoisNumeros(num1: number, num2: number): void {//passando parametros num1 e num2 para a funcao

    alert(num1 + num2);

  }


  ionViewDidLoad() {
    //this.somaDoisNumeros(10,99);
  }

}
