export interface AlunoDTO{

  
        codigo: number,
        nome: string,
        token:string,
        autorizacoes: [
            {
                id: number,
                nome: string,
                authority: string
            }
        ],
        cfc: {
            nomeFantasia: string,
            cnpj: string,
            cep: string,
            endereco: string,
            bairro: string,
            cidade: string,
            uf: string,
            numero: string,
            telefone: string,
            email: string
        },
        email: string,
        foto: string,
        username: string
    }
