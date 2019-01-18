import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrucoesPage } from './instrucoes';

@NgModule({
  declarations: [
    InstrucoesPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrucoesPage),
  ],
})
export class InstrucoesPageModule {}
