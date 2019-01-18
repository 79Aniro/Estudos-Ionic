export interface MatriculaDTO{

    titulo:string,
   categorias:string,
   aulas:string,
   data_matricula:string


}

export function buildMatriculaDTO(){

    let matricula={
        titulo:'',
        categorias:'',
        aulas:'',
        data_matricula:'',
    
    }
    return matricula;
}