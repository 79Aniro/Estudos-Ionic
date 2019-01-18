import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamePraticoDto, buildExamePraticoDto } from '../../modelos/exame-pratico-dto';
import { ExamePraticoProvider } from '../../providers/exame-pratico/exame-pratico';

import { ExamePraticoWebDto } from '../../modelos/exame-pratico-web-dto';
import { StorageProvider } from '../../providers/storage/storage';



@IonicPage()
@Component({
  selector: 'page-exame-pratico',
  templateUrl: 'exame-pratico.html',
})
export class ExamePraticoPage {

  categoria:string;
  situacao:string;
  data:string;
  hora:string;
  veiculo:string;
  protocolo:string;
  var_class:string;


  card1: ExamePraticoDto={
    situacao:'Agendado',
    categoria:'B',
    data:'31/10/2018',
    hora:'10:00',
    veiculo:'Vectra-GM',
    protocolo:'254878',

  }
  aulamatriz: ExamePraticoDto=buildExamePraticoDto();
   

 list: ExamePraticoDto[]=[]


  itens: ExamePraticoWebDto[]=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public service: ExamePraticoProvider,
     public localStorage: StorageProvider) {

    
    
  }

    /**
     * 0 - Agendado
     * 1 - Aprovado
     * 2 - Falta
     * 3 - Reprovado
     */
  ionViewDidLoad() {
    
    
    let codigo= 2572;

    this.service.buscarExamesAluno(codigo).
    subscribe(response=>{
      this.itens=response;
      for(var item of this.itens){       
       this.aulamatriz.situacao=this.definirSituação(item.situacao);
       this.aulamatriz.categoria=item.categoria;
       var d= new Date(item.data);
       this.aulamatriz.data=d.toLocaleDateString();
       this.aulamatriz.hora=d.toLocaleTimeString();
       this.aulamatriz.protocolo=item.protocolo;
       this.aulamatriz.veiculo=item.veiculo.marca+"-"+item.veiculo.modelo
       this.list.push(this.aulamatriz);
       this.aulamatriz=buildExamePraticoDto();

      }
      
    }),
    error=>{
      console.log("error exame pratico");
    };
    

   
  }



  definirSituação(situacao:number){

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
