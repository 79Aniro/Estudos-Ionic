import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroDetalhePage } from './financeiro-detalhe';

@NgModule({
  declarations: [
    FinanceiroDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroDetalhePage),
  ],
})
export class FinanceiroDetalhePageModule {}
