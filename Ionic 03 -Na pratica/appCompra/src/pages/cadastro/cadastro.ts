import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario: IUsuario={
    name:'',
    email:'',
    password:''

  }
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public usuarioProvider:UsuariosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  voltar(){
    this.navCtrl.setRoot(HomePage);
  }
  addUsuario(){

    
    this.usuarioProvider.addUsuario(this.usuario).subscribe(
      response=>{
        console.log(response);
      },
      erro=>{
        console.log(erro.message);
      });
  }
}
