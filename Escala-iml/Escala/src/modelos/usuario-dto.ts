export interface UsuarioDTO{

    nome:string;
    apelido:string;
}

export function buildUsuarioDTO(){

    let usr={
        nome:"",
        apelido:""
    }

    return usr;
}