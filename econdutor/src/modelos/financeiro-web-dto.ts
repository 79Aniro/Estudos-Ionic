export interface FinanceiroWebDTO{

   
        codigo: number,
        pago: number,
        numero: number,
        formaPagamento: number,
        vencimento: Date,
        pagamento: Date,
        valor: number,
        multa: number,
        juros: number,
        desconto: number,
        valorRecebido: number,
        descricao: string,
        observacao:string,
        venda: {
            codigo: number,
            valorTotal: number,
            data: Date,
            matricula: {
                codigo: number,
                tipoContrato: number,
                situacao: number,
                data: number
            }
        }
    
}