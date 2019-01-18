import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { LoginProvider } from '../../providers/login/login';
import { StorageProvider } from '../../providers/storage/storage';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)],
 
})
export class HomeModule {
}