export interface FinanceiroDto{

    pago:string;
    apagar:string;
    atrasado:string;
    tipo_matricula:string //Ex:primeira habilitacao; renovação, etc
    data:string;
    
}

export function buildFinanceiroDto(){

    let finc={
        pago:'',
        apagar:'',
        atrasado:'',
        tipo_matricula:'',
        data:''

    }
    return finc;
}