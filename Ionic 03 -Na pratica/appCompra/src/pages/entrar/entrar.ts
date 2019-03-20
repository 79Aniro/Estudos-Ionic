import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { IUsuario } from '../../interfaces/IUsuario';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the EntrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {
  usuario:IUsuario = {email:'',password:''};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     public usuariosProvider:UsuariosProvider) {
  }

  ionViewDidLoad() {

  }

  cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

  loginUsuario(){
    this.usuariosProvider.loginUsuario(this.usuario).subscribe(res => {
      this.usuariosProvider.setStorage('usuario',res);
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

}