import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';



@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {

public lista_filmes= new Array<any>();
public loader;

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
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider:MoovieProvider,
    public loadingCtrl: LoadingController) {
  }



  public somaDoisNumeros(num1: number, num2: number): void {//passando parametros num1 e num2 para a funcao

    alert(num1 + num2);

  }


  ionViewDidEnter() {
    this.abreLoading();
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response=(data as any);//casting de valor
        const objeto_retorno= JSON.parse(response._body)
        this.lista_filmes=objeto_retorno.results;
        console.log(objeto_retorno);
        this.fechaLoading();
      },error=>{
        console.log(error);
        this.fechaLoading();
      }
    )
  }

  abreLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
     
    });
    this.loader.present();
  }

  fechaLoading(){
    this.loader.dismiss();
  }

}
