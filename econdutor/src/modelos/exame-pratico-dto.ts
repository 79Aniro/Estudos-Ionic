export interface ExamePraticoDto{

     situacao:string;
    categoria:string;
    data:string;
    hora:string;
    veiculo:string;
    protocolo:string;
}

export function buildExamePraticoDto(){
    let exame={
        situacao:"",
        categoria:"",
        data:"",
        hora:"",
        veiculo:"",
        protocolo:""
    }
    return exame;
}