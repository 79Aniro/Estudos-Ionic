import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaAgendadaPage } from './aula-agendada';

@NgModule({
  declarations: [
    AulaAgendadaPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaAgendadaPage),
  ],
})
export class AulaAgendadaPageModule {}
