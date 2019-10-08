export interface AtividadeDTO{

    id:number;
    data: number;
    dataString: string;
    hora:number;
    horaString:string;
    observacao: string;
}

export function buildAtividadeDTO(){

    let obj={
        id:null,
        data: null,
        dataString: "",
        hora:null,
        horaString:"",
        observacao: ""
    }

    return obj;
}