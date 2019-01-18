import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PagamentoDto } from '../../modelos/pagamentos-dto';

/**
 * Generated class for the FinanceiroDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financeiro-detalhe',
  templateUrl: 'financeiro-detalhe.html',
})
export class FinanceiroDetalhePage {

  itemDto:PagamentoDto;
  items: PagamentoDto[];
  pago:string;
  descricao:string;
  situacao:string;
  forma_pagamento:string;
  data_vencimento:string;
  data_pagamento:string;
  multa:string;
  juros:string;
  desconto:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
    
    var it:PagamentoDto= this.navParams.get('item');
    console.log(it);
    
   
    this.itemDto=it;
   
    
    this.pago="R$ "+(Number(this.itemDto.pago)/100*100).toFixed(2);
    if(this.itemDto.forma_pagamento==""){
      this.forma_pagamento="-"
    }
    else{
      this.forma_pagamento=this.itemDto.forma_pagamento;
    }
    
    this.situacao=this.itemDto.situacao;
    this.descricao=this.itemDto.descricao;
    this.data_vencimento=this.itemDto.data_vencimento;
    this.data_pagamento=this.itemDto.data_pagamento.substring(11);
    
    this.multa="R$ "+(Number(this.itemDto.multa)/100*100).toFixed(2);
    this.juros="R$ "+(Number(this.itemDto.juros)/100*100).toFixed(2);
    this.desconto="R$ "+(Number(this.itemDto.desconto)/100*100).toFixed(2);
    
  }

}
