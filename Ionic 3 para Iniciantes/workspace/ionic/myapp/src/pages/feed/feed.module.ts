import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    
  ],
  exports:[
    FeedPage
  ]
})
export class FeedPageModule {}
