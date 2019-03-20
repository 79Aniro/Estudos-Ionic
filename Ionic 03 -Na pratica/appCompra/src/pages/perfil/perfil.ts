import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

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
   let usuario={
    name: "Aniro",
    email: "aniro@teste",
    password: "123456",
    id: 2
   };
   this.usuarioProvider.showUsuario(usuario).
   subscribe(response=>{
    this.usuario=response;
   });
   
  }

  voltar(){
    this.navCtrl.setRoot(HomePage);
  }
  editarUsuario(){

    
    this.usuarioProvider.editUsuario(this.usuario).subscribe(
      response=>{
        this.usuario=response;
      },
      erro=>{
        console.log(erro.message);
      });
  }
}