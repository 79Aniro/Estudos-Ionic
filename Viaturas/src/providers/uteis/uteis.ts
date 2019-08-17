
import { Injectable } from '@angular/core';


@Injectable()
export class UteisProvider {

  constructor() {
    
  }

  dataLocal(dat:string){
    let d= new Date(dat).toLocaleDateString();
    return d;
  }
}
