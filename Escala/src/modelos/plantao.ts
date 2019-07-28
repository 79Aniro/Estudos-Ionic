export interface PlantaoDTO {

    id: number;
    data: number;
    dataString: string;
    observacao: string;
    cargaHoraria: string;
    escalado:string;
}

export function buildPlantao() {
    let plantao = {

        id: null,
        data: null,
        dataString: '',
        observacao: '',
        cargaHoraria: '',
        escalado:''
    }
    return plantao;

}