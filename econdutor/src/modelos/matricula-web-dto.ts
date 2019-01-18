export interface MatriculaWebDTO{

    codigo: number,
    tipoContrato: number,
    situacao: number,
    categoriaA: number,
    categoriaB: number,
    categoriaC: number,
    categoriaD: number,
    categoriaE: number,
    categoriaACC: number,
    numeroAulas: number,
    numeroCnh: string,
    validadeCnh: Date,
    data: Date
}

export function buildMatriculaWebDTO(){

    let matricula={

        codigo: null,
    tipoContrato: null,
    situacao: null,
    categoriaA: null,
    categoriaB: null,
    categoriaC: null,
    categoriaD: null,
    categoriaE: null,
    categoriaACC: null,
    numeroAulas: null,
    numeroCnh: '',
    validadeCnh: null,
    data: null
    }
    return matricula;
}