export interface ViaturaDTO{

    id:number;
    placa:string;
    patrimonio:string;
    kilometragem:number;
    modelo:string;
    anoFabricacao:number;
    ultimaRevisao:Date;
    ultimaRevisaoKm:number;
    proximaRevisaoKm:number;
    proximaRevisao:Date;
    ultimaTrocaPneus:Date;
    proximaTrocaPneus:Date;
    observacao:string;

}