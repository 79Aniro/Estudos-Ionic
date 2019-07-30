import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';
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

  
  nome:string;
  usuario:UsuarioDTO=buildUsuarioDTO();
  nomeLogado:string
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public localStorage:StorageProvider,
    public alertCtrl: AlertController,
    public events: Events
   ) {
  }

  ionViewDidLoad() {
    this.nomeLogado='';
    let usuario=this.localStorage.getUsuario();
    if(usuario!=null){
      this.nomeLogado=usuario.nome;
    }
  }

  gravar(){

    
    this.usuario.nome=this.nome.toLocaleUpperCase();
    this.localStorage.setusuario(this.usuario);
    this.events.publish('atualizacao',  Date.now());
    this.navCtrl.setRoot('MenuPage');

  }

  apagar(){

  this.showPrompt2();

  }
  apagarPlantoes(){

    this.showPrompt();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Deletar plantões',
      message: "Deseja apagar todos os plantões?",

      buttons: [

        {
          text: 'Não',
          handler: data => {

          }
        },
        {
          text: 'Sim',
          handler: data => {
          this.localStorage.deletePlantoes();
          
          this.navCtrl.push('ListaPlantaoPage');
          }
        },
      ]
    });
    prompt.present();
  }

  showPrompt2() {
    const prompt = this.alertCtrl.create({
      title: 'Apagar Usuario',
      message: "Esta ação apagará todos os dados!!",

      buttons: [

        {
          text: 'Não',
          handler: data => {

          }
        },
        {
          text: 'Sim',
          handler: data => {
            this.localStorage.deleteUsuario();
            this.localStorage.deletePlantoes();
            this.events.publish('atualizacao',  Date.now());
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          }
        },
      ]
    });
    prompt.present();
  }

  
  

}
