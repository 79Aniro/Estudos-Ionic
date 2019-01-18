export interface ItemVendaWEBDTO{

   
        codigo: number,
        valor: number,
        quantidade: number,
        venda: {
            codigo: number,
            valorTotal: number,
            data: Date,
            planoPagamento: {
                codigo: number,
                descricao: string
            }
        },
        pacote: {
            codigo: number,
            nome: string
        }
   
}