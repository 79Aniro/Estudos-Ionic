export interface ViaturaDTO{

    id:number;
    placa:string;
    patrimonio:string;
    kilometragem:number;
    modelo:string;
    anoFabricacao:number;
    ultimaRevisao:Date;
    ultimaRevisaoTexto:string;
    ultimaRevisaoKm:number;
    proximaRevisaoKm:number;
    proximaRevisao:Date;
    proximaRevisaoTexto:string;
    ultimaTrocaPneus:Date;
    ultimaTrocaPneusTexto:string;
    proximaTrocaPneus:Date;
    proximaTrocaPneusTexto:string;
    observacao:string;
    fotos:string[];

}
export function buildViaturaDto(){

    let vtr={
        id:null,
        placa:'',
        patrimonio:'',
        kilometragem:null,
        modelo:'',
        anoFabricacao:null,
        ultimaRevisao:null,
        ultimaRevisaoTexto:'',
        ultimaRevisaoKm:null,
        proximaRevisaoKm:null,
        proximaRevisao:null,
        proximaRevisaoTexto:'',
        ultimaTrocaPneus:null,
        ultimaTrocaPneusTexto:'',
        proximaTrocaPneus:null,
        proximaTrocaPneusTexto:'',
        observacao:'',
        fotos:[],
    }
    return vtr;
}