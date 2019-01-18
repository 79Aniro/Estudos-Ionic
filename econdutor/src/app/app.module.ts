import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { AgendaProvider } from '../providers/agenda/agenda';
import { FasesProvider } from '../providers/fases/fases';
import { ExamePraticoProvider } from '../providers/exame-pratico/exame-pratico';
import { ExameTeoricoProvider } from '../providers/exame-teorico/exame-teorico';
import { MatriculaProvider } from '../providers/matricula/matricula';
import { ItemVendaProvider } from '../providers/item-venda/item-venda';
import { PagamentoProvider } from '../providers/pagamento/pagamento';
import { StorageProvider } from '../providers/storage/storage';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';

import{File} from '@ionic-native/file'
import{FileTransfer} from '@ionic-native/file-transfer'
import {DocumentViewer} from '@ionic-native/document-viewer'
import { FileOpener } from '@ionic-native/file-opener';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerPage } from '../pages/pdf-viewer/pdf-viewer';






@NgModule({
  declarations: [
    MyApp,
    PdfViewerPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    PdfViewerModule
   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PdfViewerPage
  
  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,     
    
    AgendaProvider,
    FasesProvider,
    ExamePraticoProvider,
    ExameTeoricoProvider,
    MatriculaProvider,
    ItemVendaProvider,
    PagamentoProvider,
    StorageProvider,
    HTTP,
    File,
    FileOpener,

   FileTransfer,
   DocumentViewer
  ]
})
export class AppModule {}


 
