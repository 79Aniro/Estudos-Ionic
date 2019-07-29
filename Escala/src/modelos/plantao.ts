export interface PlantaoDTO {

    id: number;
    data: number;
    dataString: string;
    observacao: string;
    cargaHoraria: string;
    escalado:string;
    troca:string;
    isEscalado:string;
    novoEscalado:string;
    velhoEscalado:string;
    vouFazerOutro:string;
    outroFazParaMim:string;
    
}

export function buildPlantao() {
    let plantao = {

        id: null,
        data: null,
        dataString: '',
        observacao: '',
        cargaHoraria: '',
        escalado:'',
        troca:'',
        isEscalado:'',
        novoEscalado:'',
        velhoEscalado:'',
        vouFazerOutro:'',
        outroFazParaMim:''
    }
    return plantao;

}