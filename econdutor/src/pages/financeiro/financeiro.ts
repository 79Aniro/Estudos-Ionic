import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Thumbnail } from "ionic-angular";

import {
  FinanceiroDto,
  buildFinanceiroDto
} from "../../modelos/financeiro-dto";

import { PagamentoDto, buildPagamentoDto } from "../../modelos/pagamentos-dto";
import { PagamentoWebDto } from "../../modelos/pagamento-web-dto";
import { PagamentoProvider } from "../../providers/pagamento/pagamento";



@IonicPage()
@Component({
  selector: "page-financeiro",
  templateUrl: "financeiro.html"
})
export class FinanceiroPage {
  inadimplencia: string = "ADIMPLENTE";
  config_class_situaca: string = "config_adimplencia";
  config_icone_name: string = "checkmark-circle";
  juros: number = 0; //acumula valor de juros a receber
  multa: number = 0; //acumula valor de multas a receber
  valores: number = 0; //acumula valor a receber
  pagos: number = 0; //acumula valores pagos
  pagos_config:string//define o valor pago formatado
  apagar: number = 0;
  apagar_config:string //define valor formatado
  atrasado: number = 0;
  atrasado_config:string//define valor formatado
  listaMovimentacao: PagamentoWebDto[] = []; //lista dos dados do servidor
  lista: PagamentoDto[] = []; //Lista para preencher os dados na tela

  tipo_matricula:string;
  data_matricula:string;

  financeiroMatriz: FinanceiroDto = buildFinanceiroDto();
  pagamentoDtoMatriz: PagamentoDto = buildPagamentoDto();

  finac1: FinanceiroDto = {
    data: "15/10/2011",
    pago: "Pago: 1200,25",
    apagar: "A pagar: 2257,98",
    atrasado: "",
    tipo_matricula: "Primeira Habilitação"
  };
  pag1: PagamentoDto = {
    data_pagamento: "Pagamento 12/05/2018",
    data_vencimento: "20/05/2018",
    desconto: "25,98",
    descricao:
      "Entrada: aluno Gabriel Miguel(Taxa de reprova exame teórico:09/06/2017)",
    forma_pagamento: "Cartão",
    juros: "R$ 6,46",
    multa: "R$ 0,45",
    pago: "R$ 15,22",
    tipo_pagamento: "Entrada",
    situacao: "Pago",
    valor: "Valor: R$ 1250,75",
    status: "checkmark-circle",
    color_status: "#50b748",
    venc_pag: "",
    atrasado:''
  };

  items: PagamentoDto[] = [];
  items_todos: PagamentoDto[] = [];
  items_pagos: PagamentoDto[] = [];
  items_apagar: PagamentoDto[] = [];
  items_atrasados: PagamentoDto[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: PagamentoProvider
  ) {}

  ionViewDidLoad() {
    this.service.buscarFinanceiro(2572).subscribe(response => {
      this.listaMovimentacao = response;    
      this.tipo_matricula=this.getTipoContrato(this.listaMovimentacao[0].venda.matricula.tipoContrato);
      this.data_matricula=new Date(this.listaMovimentacao[0].venda.matricula.data).toLocaleDateString();
      this.calcularValores(this.listaMovimentacao);
      this.financeiroMatriz.data = new Date(
        this.listaMovimentacao[0].venda.matricula.data
      ).toDateString();
      this.financeiroMatriz.pago = this.pagos.toString();
      this.financeiroMatriz.apagar = this.apagar.toString();

      
      for (var x of this.listaMovimentacao) {
        
        var n = x.descricao.search(":");
        this.pagamentoDtoMatriz.tipo_pagamento = x.descricao.substr(0, n);
        this.pagamentoDtoMatriz.data_pagamento =
          x.pagamento != null ? new Date(x.pagamento).toLocaleDateString() : "";
        this.pagamentoDtoMatriz.data_vencimento = new Date(
          x.vencimento
        ).toLocaleDateString();
        this.pagamentoDtoMatriz.desconto = x.desconto.toString();
        this.pagamentoDtoMatriz.descricao = x.descricao;
        this.pagamentoDtoMatriz.forma_pagamento = this.getNomeFormaPagamento(
          x.formaPagamento
        );
        this.pagamentoDtoMatriz.juros = x.juros.toString();
        this.pagamentoDtoMatriz.multa = x.multa.toString();

        
          this.pagamentoDtoMatriz.pago = (
            x.valor +
            x.multa +
            x.juros
          ).toFixed(2);
        

        //Definindo se esta atrasado

       var ddd= new Date();
        if(x.pago==0 && x.vencimento< ddd ){
          this.pagamentoDtoMatriz.atrasado="sim";
        }
        else{
          this.pagamentoDtoMatriz.atrasado="nao";
        }

        this.pagamentoDtoMatriz.situacao = this.getSituacao(x.pago);
        this.pagamentoDtoMatriz.status = this.getStatus(
          this.pagamentoDtoMatriz.data_pagamento
        );
        this.pagamentoDtoMatriz.valor = x.valor.toString();
        if (this.pagamentoDtoMatriz.data_pagamento == "") {
          this.pagamentoDtoMatriz.venc_pag =
            "Vencimento " + this.pagamentoDtoMatriz.data_vencimento;
        } else {
          this.pagamentoDtoMatriz.venc_pag =
            "Pagamento " + this.pagamentoDtoMatriz.data_pagamento;
        }
        

//Definindo cor status_cor

if(this.pagamentoDtoMatriz.situacao=="Pago"){
  this.pagamentoDtoMatriz.color_status="rgb(43, 141, 38);"
}
else{
  this.pagamentoDtoMatriz.color_status="#d22114;"
}

        this.items.push(this.pagamentoDtoMatriz);
        var dd= new Date();
       
        if (this.pagamentoDtoMatriz.situacao == "Pago") {
          //definindo array de parcelas pagas
          this.items_pagos.push(this.pagamentoDtoMatriz);
        } 
        else if(this.pagamentoDtoMatriz.atrasado=="sim"){
          this.items_atrasados.push(this.pagamentoDtoMatriz);
        }
        
        else {
          this.pagamentoDtoMatriz.status="remove-circle"
          this.items_apagar.push(this.pagamentoDtoMatriz);
        }

        this.pagamentoDtoMatriz = buildPagamentoDto();
      }
    });

    this.items_todos=this.items;
  }

  detalhaAula(item: PagamentoDto) {
    this.navCtrl.push("FinanceiroDetalhePage", { item: item });
  }

  listaPagos() {
    this.items = this.items_pagos;
  
  }

  listaApagar() {
    this.items = this.items_apagar;
    
  }

  listaAtrasados() {
    this.items = this.items_atrasados;
    
  }
  listarTodas(){
    this.items=this.items_todos;
  }

  verificarSistuacao(): string {
    for (let var1 of this.items) {
      if (var1.situacao == "A pagar") {
        this.inadimplencia = "INADIMPLENTE";

        return "INADIMPLENTE";
      }
    }
    return "ADIMPLENTE";
  }

  calcularValores(lista: PagamentoWebDto[]) {
    this.pagos = 0;
    this.apagar=0;
    this.atrasado=0;
    for (let x of lista) {
      this.juros = this.juros + x.juros;
      this.multa = this.multa = x.multa;
      this.valores = this.valores + x.valor;
      if (x.valorRecebido != 0) {
        this.pagos = this.pagos + x.valorRecebido ;
      }

     
      var d = new Date();
      var d2 = new Date(x.vencimento);
      if (d2 < d && x.pagamento == null) {
        this.atrasado = this.atrasado + x.valor+x.multa+x.juros;
        console.log('atrasado',this.atrasado)
      }
      else if(x.pagamento==null){
        this.apagar=this.apagar+x.valor+x.multa+x.juros;
        console.log('apagar',this.apagar);
      }
    }
    
    if (this.atrasado > 0) {
      this.inadimplencia = "INADIMPLENTE";
      this.config_class_situaca = "config_inadimplencia";
    } else {
      this.inadimplencia = "ADIMPLENTE";
      this.config_class_situaca = "config_adimplencia";
    }

    
    
    
  
    this.pagos_config=this.pagos.toFixed(2);
    this.atrasado_config=this.atrasado.toFixed(2);
    this.apagar_config=this.apagar.toFixed(2);
  }

  /**
   * pago
   * 0 - Não<br>
   * 1 - Sim
   */

  /**
   * Forma de pagamento
   * 0 - Dinheiro<br>
   * 1 - Débito<br>
   * 2 - Crédito<br>
   * 3 - Cheque<br>
   * 4 - Boleto
   */

  getNomeFormaPagamento(cod: number) {
    switch (cod) {
      case 0:
        return "Dinheiro";

      case 1:
        return "Débito";

      case 2:
        return "Crédito";

      case 3:
        return "Cheque";

      case 4:
        return "Boleto";

      default:
        return "";
    }
  }

  getSituacao(cod: number) {
    switch (cod) {
      case 0:
        return "A Pagar";
      case 1:
        return "Pago";
    }
  }

  getTituloPag(cod: number) {
    switch (cod) {
      case 0:
        return "Vencimento";
      case 1:
        return "Pagamento";
    }
  }

  getStatus(dat: String) {
    var d = new Date();
    if (dat != "") {
      return "checkmark-circle";
    } else {
      return "close-circle";
    }
  }



    /**
     * 0 - Primeira Habilitação <br>
     * 1 - Reabilitação de Permissionário <br>
     * 2 - Renovação <br>
     * 3 - Adição de Categoria / Mudança de Categoria <br>
     * 4 - Registro de CNH Estrangeira <br>
     */

    getTipoContrato(cod: number) {
      switch (cod) {
        case 0:
          return "Primeira Habilitação";
  
        case 1:
          return "Reabilitação de Permissionário";
  
        case 2:
          return "Renovação";
  
        case 3:
          return "Adição de Categoria / Mudança de Categoria";
  
        case 4:
          return "Registro de CNH Estrangeira";
  
        default:
          return "";
      }
    }
}
