import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPlantaoPage } from './lista-plantao';

@NgModule({
  declarations: [
    ListaPlantaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPlantaoPage),
  ],
})
export class ListaPlantaoPageModule {}
