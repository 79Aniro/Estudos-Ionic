export interface FasesDTO{

    titulo:string;
    inicio:string;
    final:string;
    icone:string;

}

export function buildFaseDTO(){

    let fase={
        titulo:"",
    inicio:"",
    final:"",
    icone:"",
    }
    return fase;
}