export interface FaseBaseDTO{

    
        codigo: number,
        inicio: number,
        fim: number,
        concluida: number,
        tipoFase: {
            codigo: number,
            nome: string
        },
        matricula: {
            codigo:number,
            situacao: number
        }
    
}

export function buildFaseBaseDTO(){

    let fase={
        codigo: "",
        inicio: "",
        fim: "",
        concluida:"",
        tipoFase: {
            codigo:"",
            nome:""
        },
        matricula: {
            codigo:"",
            situacao:""
        }
    }
    return fase;
}