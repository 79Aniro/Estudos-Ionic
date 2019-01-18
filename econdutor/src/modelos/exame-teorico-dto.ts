export interface ExameTeoricoDto{

    situacao:string;   
   data:string;
   hora:string;   
   protocolo:string;
}

export function buildExameTeoricoDto(){

    let exame={
        situacao:"",  
        data:"",
        hora:"",  
        protocolo:"",
    }

    return exame;
}