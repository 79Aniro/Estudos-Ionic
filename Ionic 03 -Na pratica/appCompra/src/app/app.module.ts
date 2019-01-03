import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AulaPage } from '../pages/aula/aula';
import { CursosProvider } from '../providers/cursos/cursos';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage,
    AulaPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhePage,
    AulaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CursosProvider,
    
  ]
})
export class AppModule {}
