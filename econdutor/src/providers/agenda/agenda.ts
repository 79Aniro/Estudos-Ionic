
/*import { Injectable } from '@angular/core';
import { AgendaDTO } from '../../modelos/agenta-dto';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from "rxjs/Rx";
import { StorageProvider } from '../storage/storage';
import { Platform } from 'ionic-angular';

import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgendaProvider {

  basepath="/api"
  constructor(public http: Http,
    public localStorage: StorageProvider,
    public plataform:Platform) {
     if(plataform.is('cordova')){
        console.log(plataform.is('cordova'))
        this.basepath='http://webservice.econdutorcfc.com.br'
      
    
  }
}


  buscarAgendaAluno(codigo:number){
    var headers = new Headers(
      {
        'Content-Type' : 'application/json',
        'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyRGV0YWlscyI6IntcImNvZGlnb1wiOjI1NzIsXCJub21lXCI6XCJKT0FPIFZJVE9SXCIsXCJhdXRvcml6YWNvZXNcIjpbe1wiaWRcIjoxLFwibm9tZVwiOlwiUk9MRV9BbHVub1wiLFwiYXV0aG9yaXR5XCI6XCJST0xFX0FsdW5vXCJ9XSxcImNmY1wiOntcIm5vbWVGYW50YXNpYVwiOlwiQU5PVkEgU0lTVEVNQVMgTFREQVwiLFwiY25walwiOlwiMDYuMDYyLjkzMy8wMDAxLTkwXCIsXCJjZXBcIjpcIjEyMjM5LTAwOVwiLFwiZW5kZXJlY29cIjpcIlJ1YSBSaW8gQ2FuaW5kZVwiLFwiYmFpcnJvXCI6XCJKYXJkaW0gU2FudGEgSW5lcyBJSVwiLFwiY2lkYWRlXCI6XCJTYW8gSm9zZSBkb3MgQ2FtcG9zXCIsXCJ1ZlwiOlwiU1BcIixcIm51bWVyb1wiOlwiNTBcIixcInRlbGVmb25lXCI6XCIoMTIpIDMzMzEtMTMzM1wiLFwiZW1haWxcIjpcInRlc3RlQGhvdG1haWwuY29tXCJ9LFwiZW1haWxcIjpcIm1pbWkuZmdhbHZhbzEwMDNAZ21haWwuY29tXCIsXCJmb3RvXCI6XCJodHRwOi8vZWNvbmR1dG9yY2ZjLmNvbS9hbHVub3MvZm90b3MvMjU3Mi5qcGdcIixcInVzZXJuYW1lXCI6XCJKT0FPIFZJVE9SXCJ9IiwiaXNzIjoiYnIuY29tLmNvbmV4YW9sb2NhbC5lY29uZHV0b3IiLCJzdWIiOiJKT0FPIFZJVE9SIn0.v7epA2dLLNREkg2xOFuYBVxFBUvneg8iH2xHv85VCJ4_grrAjgBch9O2ST9zSTBfWO9FJA4J9wnY34u5p_zdGQ'

      });
     
    codigo=2572;
   return new Promise((resolve,reject)=>{

    this.http.get(`${this.basepath}/agenda/codigo?&codigo=${codigo}`,{
    
    }).
    subscribe((result:any)=>{
      resolve(result.json());
    },
    (error)=>{
      reject(error.json());
    });
   });

}

}
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgendaDTO } from '../../modelos/agenta-dto';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from "rxjs/Rx";
import { StorageProvider } from '../storage/storage';
import { Platform } from 'ionic-angular';



@Injectable()
export class AgendaProvider {

  //basepath="api"
  token:string;
  constructor(public http: HttpClient,
    public localStorage: StorageProvider,
    public plataform:Platform,
    ) {
  /*   if(plataform.is('cordova')){
        console.log(plataform.is('cordova'))
        this.basepath='http://webservice.econdutorcfc.com.br'
      
    
  }*/
}

  buscarAgendaAluno(codigo:number): Observable<AgendaDTO[]>{

    return this.http.get<AgendaDTO[]>(`${API_CONFIG.baseProd}/agenda/app/codigo?&codigo=${codigo}`,
   // return this.http.get<AgendaDTO[]>(`https://defesa-civil-acm.herokuapp.com/agenda/buscando`,
    {
      
      headers:{
        'Authorization':this.localStorage.getToken(),
        "Content-Type":"application/json",
       // 'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyRGV0YWlscyI6IntcImNvZGlnb1wiOjI1NzIsXCJub21lXCI6XCJKT0FPIFZJVE9SXCIsXCJhdXRvcml6YWNvZXNcIjpbe1wiaWRcIjoxLFwibm9tZVwiOlwiUk9MRV9BbHVub1wiLFwiYXV0aG9yaXR5XCI6XCJST0xFX0FsdW5vXCJ9XSxcImNmY1wiOntcIm5vbWVGYW50YXNpYVwiOlwiQU5PVkEgU0lTVEVNQVMgTFREQVwiLFwiY25walwiOlwiMDYuMDYyLjkzMy8wMDAxLTkwXCIsXCJjZXBcIjpcIjEyMjM5LTAwOVwiLFwiZW5kZXJlY29cIjpcIlJ1YSBSaW8gQ2FuaW5kZVwiLFwiYmFpcnJvXCI6XCJKYXJkaW0gU2FudGEgSW5lcyBJSVwiLFwiY2lkYWRlXCI6XCJTYW8gSm9zZSBkb3MgQ2FtcG9zXCIsXCJ1ZlwiOlwiU1BcIixcIm51bWVyb1wiOlwiNTBcIixcInRlbGVmb25lXCI6XCIoMTIpIDMzMzEtMTMzM1wiLFwiZW1haWxcIjpcInRlc3RlQGhvdG1haWwuY29tXCJ9LFwiZW1haWxcIjpcIm1pbWkuZmdhbHZhbzEwMDNAZ21haWwuY29tXCIsXCJmb3RvXCI6XCJodHRwOi8vZWNvbmR1dG9yY2ZjLmNvbS9hbHVub3MvZm90b3MvMjU3Mi5qcGdcIixcInVzZXJuYW1lXCI6XCJKT0FPIFZJVE9SXCJ9IiwiaXNzIjoiYnIuY29tLmNvbmV4YW9sb2NhbC5lY29uZHV0b3IiLCJzdWIiOiJKT0FPIFZJVE9SIn0.v7epA2dLLNREkg2xOFuYBVxFBUvneg8iH2xHv85VCJ4_grrAjgBch9O2ST9zSTBfWO9FJA4J9wnY34u5p_zdGQ'
      }
    });

}
}





