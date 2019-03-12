import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurso } from '../../interfaces/ICurso';
/*
  Generated class for the CursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursosProvider {
  lista : ICurso[]
  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }
  allTeste(){
    return this.http.get<ICurso[]>('http://localhost:3000/cursos');
  }
  addTeste(data:ICurso){
    return this.http.post<ICurso>('http://localhost:3000/cursos',data);
  }

  all(){


   const lista : ICurso[]= [
      {
        id: 1,
        titulo: "Curso de Ionic",
        descricao: "Aprenda Ionic na pratica",
        valor: 23.90,
        valor_txt: '23,90',
        imagem: "https://cdn-images-1.medium.com/max/1200/1*jxlCALz6A7tfrC7nC9W9og.jpeg",
        sobre_curso: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus pretium dui in nibh fringilla, in auctor sapien fringilla. Aenean eget nibh turpis. Aliquam erat volutpat. Curabitur semper sit amet lorem in fringilla.",
        aulas: [
  
          {
  
            id: 1,ordem:1,tempo:'10:25', titulo: "1-Introdução ao curso - 12:25", video: "https://www.youtube.com/embed/9BYtAIcyShY"
          },
          { id: 2,ordem:2,tempo:'10:25', titulo: "2-Instalando Ferramentas - 12:25", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
          { id: 3,ordem:3,tempo:'10:25', titulo: "3-O que é Ionic? - 10:05", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
          { id: 4,ordem:4,tempo:'10:25', titulo: "4-Instalando Android Studio - 08:05", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
          { id: 5,ordem:5,tempo:'10:25', titulo: "5-Primeiro App - 07:05", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
  
  
        ]
  
      }
      ,
      {
        id: 2,
        titulo: "Curso de Angular",
        descricao: "Aprenda Angular na pratica",
        valor: 25.90,
        valor_txt: '25,90',
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
        sobre_curso: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus pretium dui in nibh fringilla, in auctor sapien fringilla. Aenean eget nibh turpis. Aliquam erat volutpat. Curabitur semper sit amet lorem in fringilla.",
        aulas: [
  
  
          {
  
            id: 1,ordem:1,tempo:'10:25',
            titulo: "1-Introdução ao curso - 12:25", video: "https://www.youtube.com/embed/9BYtAIcyShY"
          },
          { id: 2,ordem:2,tempo:'10:25', titulo: "2-Instalando Angular - 12:25", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
          { id: 3,ordem:3,tempo:'10:25', titulo: "3-O que é Angulat? - 10:05", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
          { id: 4,ordem:4,tempo:'10:25', titulo: "4-Primeiros Comandos - 08:05", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
          { id: 5,ordem:5,tempo:'10:25', titulo: "5-Primeira aplicação - 07:05", video: "https://www.youtube.com/embed/9BYtAIcyShY" },
  
  
  
        ]
      }
  
    ]
    return lista;
  }

}
