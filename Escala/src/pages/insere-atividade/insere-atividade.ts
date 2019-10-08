import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { AtividadeDTO, buildAtividadeDTO } from '../../modelos/atividade';
import { IdAtividadeDTO, buildidAtividadeDTO } from '../../modelos/id_atividade';



@IonicPage()
@Component({
  selector: 'page-insere-atividade',
  templateUrl: 'insere-atividade.html',
})
export class InsereAtividadePage {

  dt:Date;
  hr:Date;
  atividade:AtividadeDTO=buildAtividadeDTO();
  atividades:AtividadeDTO[]=[];
  observacao:string;
  id:IdAtividadeDTO=buildidAtividadeDTO();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public localStorage:StorageProvider) {
  }

  ionViewDidLoad() {
    
    this.atividades=this.localStorage.getAtividade();
    if(this.atividades.length==0){
      this.id.numero=1;
    }
    else{
      this.id.numero=this.localStorage.getIdAtividade();
    }
  }

  gravar(){


let dat= new Date(this.dt);

this.atividade.data=dat.getTime();
this.atividade.dataString=dat.toLocaleDateString();




this.atividade.horaString=this.hr.toString()



this.atividade.observacao=this.observacao;
this.atividades.push(this.atividade);
this.atividade.id=this.id.numero;
this.id.numero++;
this.localStorage.setIdAtividade(this.id.numero);
this.localStorage.setAtividade(this.atividades);

this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
