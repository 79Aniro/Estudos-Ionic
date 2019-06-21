import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MetaPage } from '../pages/meta/meta';

import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyCgR6xLzBdoDzx8knmqCOxg3Wmxhu6LA00",
  authDomain: "fgraph-64dd3.firebaseapp.com",
  databaseURL: "https://fgraph-64dd3.firebaseio.com",
  projectId: "fgraph-64dd3",
  storageBucket: "fgraph-64dd3.appspot.com",
  messagingSenderId: "404383688687"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     MetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
