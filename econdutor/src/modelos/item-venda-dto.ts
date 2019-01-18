export interface ItemVendaDTO{

    tipo_servico:string;
    data_venda:string;
    total:string
    quantidade:string
}

export function buildItemVendaDTO(){

    let item={

        tipo_servico:'',
        data_venda:'',
        total:'',
        quantidade:''
    }
return item;
    }
