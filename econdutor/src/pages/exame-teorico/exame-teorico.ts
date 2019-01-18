import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { style } from '@angular/core/src/animation/dsl';
import { ExameTeoricoDto, buildExameTeoricoDto } from '../../modelos/exame-teorico-dto';
import { ExamePraticoWebDto } from '../../modelos/exame-teorico-web-dto';


import { buildExamePraticoWebDto } from '../../modelos/exame-pratico-web-dto';
import { StorageProvider } from '../../providers/storage/storage';
import { ExameTeoricoProvider } from '../../providers/exame-teorico/exame-teorico';





@IonicPage()
@Component({
  selector: 'page-exame-teorico',
  templateUrl: 'exame-teorico.html',
  
})


export class ExameTeoricoPage {
  situacao:string;
  situacao2:string
  cor:string;
  hora:string

  list:ExamePraticoWebDto[]=[]

  exameMatriz:ExameTeoricoDto=buildExameTeoricoDto();

  card1: ExameTeoricoDto={
    situacao:'Agendado',    
    data:'31/10/2018',
    hora:'10:00',   
    protocolo:'254878',
  }
  
  itens: ExameTeoricoDto[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public localStorage: StorageProvider,
    public service: ExameTeoricoProvider) {
   // let list: ExameTeoricoDto[]=[this.card1,this.card2,this.card3,this.card4];
   // this.itens=list;
  }


  /**
     * 0 - Agendado
     * 1 - Aprovado
     * 2 - Falta
     * 3 - Reprovado
     */
  ionViewDidLoad() {
    

    
     this.buscaExameTeoricos();
        
    
  }

  buscaExameTeoricos(){

   
    let codigo=2572;

    this.service.buscarExamesAluno(codigo).
    subscribe(response=>{
      this.list=response
      for(var item of this.list){

        this.exameMatriz.protocolo=item.protocolo;
        this.exameMatriz.situacao=this.defineSituaçao(item.situacao);
        var d= new Date(item.data);
        this.exameMatriz.data=d.toLocaleDateString();
        this.exameMatriz.hora=d.toLocaleTimeString();
        this.itens.push(this.exameMatriz);
        this.exameMatriz=buildExameTeoricoDto();
      }
    })


  }


  defineSituaçao(situacao:number){


    switch (situacao) {
      case 0:
          return 'Agendado';
         
      case 1:
      return 'Aprovado';
          
      case 2:
      return 'Falta';
          
      case 3:
      return 'Reprovado';
        
   
  }
  }

}
