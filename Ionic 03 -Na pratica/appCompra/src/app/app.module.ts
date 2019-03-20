import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AulaPage } from '../pages/aula/aula';
import { CursosProvider } from '../providers/cursos/cursos';
import { HttpClientModule } from '@angular/common/http';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { PerfilPage } from '../pages/perfil/perfil';
import { EntrarPage } from '../pages/entrar/entrar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage,
    AulaPage,
    CadastroPage,
    PerfilPage,
    EntrarPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhePage,
    AulaPage,
    CadastroPage,
    PerfilPage,
    EntrarPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CursosProvider,
    UsuariosProvider,
    
  ]
})
export class AppModule {}
