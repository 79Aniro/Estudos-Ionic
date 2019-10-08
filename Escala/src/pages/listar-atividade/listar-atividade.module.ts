import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarAtividadePage } from './listar-atividade';

@NgModule({
  declarations: [
    ListarAtividadePage,
  ],
  imports: [
    IonicPageModule.forChild(ListarAtividadePage),
  ],
})
export class ListarAtividadePageModule {}
