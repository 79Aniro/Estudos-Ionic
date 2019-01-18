import { BlockerOptions } from "ionic-angular/gestures/gesture-controller";

export interface PagamentoDto {

    valor: string;
    pago: string;
    descricao: string;
    forma_pagamento: string;
    data_vencimento: string;
    data_pagamento: string;
    multa: string;
    juros: string;
    desconto: string;
    tipo_pagamento: string;//Exemplo: Entrada, Parcela
    situacao: string; //Exemplo: Pago, A pagar
    status: string;
    color_status:string;
    venc_pag:string //Exemplo:Pagamento:24/12/2018 ou Vencimento:24/12/2018 
    atrasado:string
}

export function buildPagamentoDto(){
 let  pagamento={

    valor:'',
    pago: '',
    descricao: '',
    forma_pagamento:'',
    data_vencimento: '',
    data_pagamento: '',
    multa: '',
    juros:'',
    desconto: '',
    tipo_pagamento: '',//Exemplo: Entrada, Parcela
    situacao:'', //Exemplo: Pago, A pagar
    status: '',
    color_status:'',
    venc_pag:'',
    atrasado:''
    }
    return pagamento;
}