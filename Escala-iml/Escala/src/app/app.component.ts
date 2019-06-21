import { Component,ViewChild} from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { StorageProvider } from '../providers/storage/storage';
import { UsuarioDTO, buildUsuarioDTO } from '../modelos/usuario-dto';
import { STORAGE_KEYS } from '../config/storage_keys.config';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string ;
  pages: Array<{title: string, component: string}>;

  usuario:UsuarioDTO=buildUsuarioDTO();
  constructor(public platform: Platform,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public localStorage:StorageProvider) {
   this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Menu', component: 'MenuPage' },        
      { title: 'Insere Plantao', component: 'InPlantaoPage' },
      { title: 'Lista de Plantões', component: 'ListaPlantaoPage' },
      { title: 'Dados Pessoais', component: 'DadosPessoaisPage' },

    
   
      
     
    ];

    this.usuario=this.localStorage.getUsuario();

    if(this.usuario!=null){
     this.rootPage='MenuPage'
    }
 
      else{
        this.rootPage='DadosPessoaisPage';
      }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  

   if(localStorage.getItem(STORAGE_KEYS.usuario)!=null){
    this.rootPage='MenuPage'
   }

     else{
       this.rootPage='DadosPessoaisPage';
     }
    
   
  }

  openPage(page : {title:string, component:string}) {

    switch (page.title) {
     
      case 'Menu':      
      this.nav.setRoot('MenuPage');
      break;
      case 'Insere Plantao':    
      this.nav.setRoot('InPlantaoPage');
      break;
      case 'Lista de Plantões':    
      this.nav.setRoot('ListaPlantaoPage');
      break;
      case 'Dados Pessoais':    
      this.nav.setRoot('DadosPessoaisPage');
      break;
     

      default:
      this.nav.setRoot(page.component);
    }
  }
}

