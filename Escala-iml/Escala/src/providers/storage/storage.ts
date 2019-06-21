import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlantaoDTO } from '../../modelos/plantao';
import { STORAGE_KEYS } from '../../config/storage_keys.config';
import { ReferenciaIdDTO, buildReferenciaIdDTO } from '../../modelos/referecia_id';
import { UsuarioDTO } from '../../modelos/usuario-dto';


@Injectable()
export class StorageProvider {

 setPlantoes(obj:PlantaoDTO[]){

  
  
    localStorage.setItem(STORAGE_KEYS.plantoes, JSON.stringify(obj));

 }

 setId(num:number){
  
   let obj2=buildReferenciaIdDTO();
   

    obj2.numero=num;
    localStorage.setItem(STORAGE_KEYS.referencia_id, JSON.stringify(obj2));
  
  
 }

 setusuario(usuario:UsuarioDTO){

   localStorage.setItem(STORAGE_KEYS.usuario,JSON.stringify(usuario));
 }

 getUsuario(){
   let usuario= localStorage.getItem(STORAGE_KEYS.usuario);
   let us=JSON.parse(usuario);
   return us;
 }
 deleteUsuario(){

  localStorage.removeItem(STORAGE_KEYS.usuario);
 }

 getId(){
   let id= localStorage.getItem(STORAGE_KEYS.referencia_id);
   let idv=JSON.parse(id)
   return Number.parseInt(idv.numero);
 }
 getPlantoes(){
   let obj2:PlantaoDTO[]=[];
  let obj = localStorage.getItem(STORAGE_KEYS.plantoes);
  
  if (obj == null) {
      return obj2;
  }
  else {
      return JSON.parse(obj);
  }
 }
}
