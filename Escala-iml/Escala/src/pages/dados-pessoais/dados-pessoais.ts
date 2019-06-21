import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { UsuarioDTO, buildUsuarioDTO } from '../../modelos/usuario-dto';

/**
 * Generated class for the DadosPessoaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html',
})
export class DadosPessoaisPage {

  apelido:string;
  nome:string;
  usuario:UsuarioDTO=buildUsuarioDTO();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public localStorage:StorageProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  gravar(){

    this.usuario.apelido=this.apelido;
    this.usuario.nome=this.nome;
    this.localStorage.setusuario(this.usuario);
    this.navCtrl.setRoot('MenuPage');

  }

  apagar(){

    this.localStorage.deleteUsuario();
 
    this.navCtrl.setRoot('MenuPage');

  }

  

}
