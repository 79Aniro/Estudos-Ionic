
import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../../config/storage_keys-config';
import { ViaturaDTO } from '../../modelos/viatura';


@Injectable()
export class StorageServiceProvider {

 
  getViaturarAll(){

    let vtr =localStorage.getItem(STORAGE_KEYS.viaturas);
    if(vtr==null || vtr.length==0){
      return null;
    }
    else{
        return JSON.parse(vtr);
    }
  }

  addViatura(vtr:ViaturaDTO){

    let lista=this.getViaturarAll();
    if(lista==null){
      return null;
    }
    else{
      let listav:ViaturaDTO[]=[]
      listav=lista;
      let id=listav.length;
      vtr.id=id+1;
      listav.push(vtr);
      localStorage.setItem(STORAGE_KEYS.viaturas,JSON.stringify(vtr));
      
    }
  }
}
