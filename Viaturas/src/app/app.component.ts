import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html',
  selector: 'page-app',
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;


  rootPage: string ;

  pages: Array<{title: string, component: string}>;

  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {


this.inicializarApp();



this.pages = [
  { title: 'Home', component: 'HomePage' },        
  { title: 'Servicos', component: 'ServicosViaturaPage' },
  { title: 'Inserir VTR', component: 'InsereViaturaPage'},
 
  

 
];



  }

openPage(page : {title:string, component:string}) {

    this.nav.setRoot(page.component);
  }


  inicializarApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
    this.rootPage='HomePage';
  }

  
}

