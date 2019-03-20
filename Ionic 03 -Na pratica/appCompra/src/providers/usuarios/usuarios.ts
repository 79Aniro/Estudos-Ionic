import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/IUsuario';
import { Storage } from '@ionic/storage';

@Injectable()
export class UsuariosProvider {

  url:string='http://localhost:3000/';
  headers:any;
  constructor(public http: HttpClient,
    private storage: Storage) {
    
   // this.headers={"headers":{"authorization":"Bearer "+this.token}};
  }


  showUsuario(data:IUsuario){
    console.log("entrou");
    return this.http.get<IUsuario>(this.url+'usuarios/'+data.id);
  }
  addUsuario(data:IUsuario){
    return this.http.post<IUsuario>(this.url+'usuarios',data);
  }
  loginUsuario(data:IUsuario){
    return this.http.get<IUsuario>(this.url +'usuarios/1');
  }
  editUsuario(data:IUsuario){
    return this.http.put<IUsuario>(this.url+'usuarios/'+data.id,data);
  }

  setStorage(chave:any,valor:any){
    this.storage.set(chave,valor);
  }

  getStorage(chave:any){
   return this.storage.get(chave)
    }
  
}
