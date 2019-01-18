export interface AgendaDTO{
    
        codigo: number,
        dataInicio: number,
        dataTermino: number,
        instrutor: {
        nome: string,
        estrangeiro: number
        },
        veiculo: {
            marca: string,
            modelo: string
        },
        ageNome: string,
        dataCadastro: number,
        descricao: string,
        matricula: {
            codigo: number,
            tipoContrato: number,
            situacao: number
        },
        status: number,
        numAulas: number
    
}