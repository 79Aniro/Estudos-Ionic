export interface InstrucaoDto{

    titulo:string;
    texto:string;
}

export function buildInstrucaoDto(){

    let instrucao={

        titulo:"",
        texto:"",
    }
    return instrucao;
}