export interface PlantaoDTO{

    id:number;
    data:number;
    dataString:string;
    escalado:string;
    troca:string;
    trocaTexto:string;
    trocado:string;
    trocadoTexto:string;
    novoEscalado:string;
    novaData:number;
    novaDataString:string;
    cargaHoraria:string;
}

export function buildPlantao(){
 let plantao={

    id:null,
    data:null,
    dataString:'',
    escalado:'',
    troca:null,
    trocaTexto:'',
    trocado:null,
    trocadoTexto:null,
    novoEscalado:'',
    novaData:null,
    novaDataString:'',
    cargaHoraria:''
 }
 return plantao;
  
}