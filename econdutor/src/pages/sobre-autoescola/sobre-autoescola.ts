import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SobreAutoescolaDTO } from '../../modelos/sobre-auto-dto';
import { StorageProvider } from '../../providers/storage/storage';






@IonicPage()
@Component({
  selector: 'page-sobre-autoescola',
  templateUrl: 'sobre-autoescola.html',
})
export class SobreAutoescolaPage {

 /* autoEscola:SobreAutoescolaDTO={
    auto_escola:'ANOVA SISTEMAS LTDA',
    cnpj:'06.062.933/0001-90',
    telefone:'(12) 3331-1333',
    email:'teste@hotmail.com',
    endereco:'Rua Rio Caninde, 50 | Jardim Santa Ines II- São José dos Campos/SP | CEP: 12239-009'
  
    }*/

    autoEscola:SobreAutoescolaDTO={
      auto_escola:'',
      cnpj:'',
      telefone:'',
      email:'',
      endereco:'',
      endereco2:''
    
      }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public localStorage: StorageProvider) {
  }

  ionViewDidLoad() {

let aluno= this.localStorage.getLocalAluno();
this.autoEscola.auto_escola=aluno.cfc.nomeFantasia
this.autoEscola.cnpj=aluno.cfc.cnpj
this.autoEscola.telefone=aluno.cfc.telefone
this.autoEscola.email=aluno.cfc.email
this.autoEscola.endereco=`${aluno.cfc.endereco}, ${aluno.cfc.numero} | 
${aluno.cfc.bairro}-${aluno.cfc.cidade} | CEP: ${aluno.cfc.cep}`


   
  }

}
