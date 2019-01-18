export interface ExamePraticoWebDto{

    
        codigo: number,
        matricula: {
            codigo: number,
            situacao: number
        },
        data: Date,
        protocolo: string,
        situacao: number
    
}