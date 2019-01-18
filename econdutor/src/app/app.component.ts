import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlunoDTO } from '../modelos/aluno-dto';
import { StorageProvider } from '../providers/storage/storage';
import { Modal, ModalController, } from 'ionic-angular';
import { PdfViewerPage } from '../pages/pdf-viewer/pdf-viewer';









@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: string = 'TelaInicialPage';

  rootPage: string = 'TestePdfPage';

 

  pages: Array<{ title: string, component: string, icone: string }>;
  pages2: Array<{ title: string, component: string, icone: string }>;
  aluno:AlunoDTO
  foto:string='assets/imgs/avatar-blank.png'
  nome:string
  email:string
  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public localSt:StorageProvider,
    public modalCtrl: ModalController,
  ) {
   this.aluno=this.localSt.getLocalAluno();
    if(this.aluno!=null){     
      this.foto=this.aluno.foto;
      this.nome=this.aluno.nome;
      this.email=this.aluno.email;
    }
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Agenda', component: 'TelaInicialPage', icone: 'calendar' },
      { title: 'Fases', component: 'FasesPage', icone: 'trending-up' },
      { title: 'Exame Teorico', component: 'ExameTeoricoPage', icone: 'settings' },
      { title: 'Exame Pratico', component: 'ExamePraticoPage', icone: 'settings' },
      { title: 'Financeiro', component: 'FinanceiroPage', icone: 'logo-usd' },
      { title: 'Matricula', component: 'MatriculaPage', icone: 'school' },
      { title: 'Instruções', component: 'InstrucoesPage', icone: 'clipboard' },
      { title: 'Contrato', component: 'ContratoPage', icone: 'document' },
      
     
    ];

    this.pages2 = [
     
      { title: 'Sobre a autoescola', component: 'SobreAutoescolaPage', icone: 'car' },
      { title: 'Sair', component: 'HomePage', icone: 'exit' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    
     
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if(page.title=='Contrato'){

      this.onOpenPDF();
    }
    else{
      this.nav.setRoot(page.component);
      this.aluno=this.localSt.getLocalAluno();    
      this.foto=this.aluno.foto;
      this.nome=this.aluno.nome;
      this.email=this.aluno.email;
    }

   
  }

  onOpenPDF(): void {
    let modal: Modal = this.modalCtrl.create(PdfViewerPage, {
      displayData: {
        pdfSource: {
          url: 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf'
        }
      }
    });
    modal.present();
  }
}