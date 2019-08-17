
import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../../config/storage_keys-config';
import { ViaturaDTO } from '../../modelos/viatura';
import { idReferenciaDTO, buildIdReferenciaDTO } from '../../modelos/id-referncia';


@Injectable()
export class StorageServiceProvider {

 
  getViaturarAll(){

    let vtr =localStorage.getItem(STORAGE_KEYS.viaturas);
    if(vtr==null ){
      return null;
    }
    else{
    
        return JSON.parse(vtr);
    }
  }

  addViatura(vtr:ViaturaDTO){

    let lista=this.getViaturarAll();
  
    if(lista==null){
      lista=[];
    }
    
      let listav:ViaturaDTO[]=[]
      listav=lista;
      let id=listav.length;      
      listav.push(vtr);
      localStorage.setItem(STORAGE_KEYS.viaturas,JSON.stringify(listav));
      
    
  }
  setId(id:idReferenciaDTO){

   
    localStorage.setItem(STORAGE_KEYS.idReferencia,JSON.stringify(++id.id));
  }
  getId(){
    let id:idReferenciaDTO;
    id=buildIdReferenciaDTO();
    let v=localStorage.getItem(STORAGE_KEYS.idReferencia);
  
    if(v==null){
     id.id=1;
    }
    else{
      
      id.id=Number.parseInt(v);
      id.id++;
    }
    
    return id;
  }

  updateViatura(vtr:ViaturaDTO){

    let lista:ViaturaDTO[]=this.getViaturarAll();
  
    if(lista==null){
      this.addViatura(vtr);
    }
    else{
      let tam=lista.length;
      for(let i=0;i<tam;i++){
        if(lista[i].id=vtr.id){
          lista[i]=vtr;
        }
      }
      localStorage.setItem(STORAGE_KEYS.viaturas,JSON.stringify(lista));
    }
    
      
      
    
  }
}
