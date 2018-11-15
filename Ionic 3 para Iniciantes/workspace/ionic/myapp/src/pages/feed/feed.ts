import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';



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
public refresher;
public isRefresher:boolean=false;
 
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
   this.carregaFilmes();
  }


  abrirDetalhes(){
    this.navCtrl.push(FilmeDetalhesPage);
  }

  
carregaFilmes(){
  this.abreLoading();
  this.movieProvider.getLatestMovies().subscribe(
    data=>{
      const response=(data as any);//casting de valor
      const objeto_retorno= JSON.parse(response._body)
      this.lista_filmes=objeto_retorno.results;
      console.log(objeto_retorno);
      this.fechaLoading();
      if(this.isRefresher){
        this.refresher.complete();
        this.isRefresher=false;
      }
    },error=>{
      console.log(error);
      this.fechaLoading();
      if(this.isRefresher){
        this.refresher.complete();
      }
    }
  )
}
  abreLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Filmes...",
     
    });
    this.loader.present();
  }

  fechaLoading(){
    this.loader.dismiss();
  }


  doRefresh(refresher) {
    this.refresher=refresher;
    this.isRefresher=true;

    this.carregaFilmes();
  }
}
