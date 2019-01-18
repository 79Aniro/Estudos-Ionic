export interface ExamePraticoWebDto{

    
        codigo: number,
        matricula: {
            codigo: number,
            situacao: number
        },
        veiculo: {
            tipo: number,
            marca: string,
            modelo: string,
            placa: string,
            cor: string
        },
        data: Date,
        protocolo: string,
        situacao: number,
        categoria: string
    
}

export function buildExamePraticoWebDto(){

    let exame={

        codigo: null,
        matricula: {
            codigo: null,
            situacao: null
        },
        veiculo: {
            tipo: null,
            marca: "",
            modelo: "",
            placa: "",
            cor: ""
        },
        data: null,
        protocolo: "",
        situacao: null,
        categoria: ""
    }
    return exame;
}