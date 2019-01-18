import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalUser } from '../../modelos/local_user';
import { STORAGE_KEYS } from '../../config/storage_keys.config';
import { AlunoDTO } from '../../modelos/aluno-dto';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StorageProvider Provider');
  }

  getLocalUser() : LocalUser {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
        return null;
    }
    else {
        return JSON.parse(usr);
    }
}

setLocalUser(obj : LocalUser) {
    if (obj == null) {
        localStorage.removeItem(STORAGE_KEYS.localUser);
    }
    else {
        localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
}


getLocalAluno() : AlunoDTO {
    let usr = localStorage.getItem(STORAGE_KEYS.alunoLocal);
    if (usr == null) {
        return null;
    }
    else {
        return JSON.parse(usr);
    }
}

setLocalAluno(obj : AlunoDTO) {
    if (obj == null) {
        localStorage.removeItem(STORAGE_KEYS.alunoLocal);
    }
    else {
        localStorage.setItem(STORAGE_KEYS.alunoLocal, JSON.stringify(obj));
    }
}

setToken(token:string){
    if(token==null){
        localStorage.removeItem(STORAGE_KEYS.token);
    }
    else{
        localStorage.setItem(STORAGE_KEYS.token,'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyRGV0YWlscyI6IntcImNvZGlnb1wiOjI1NzIsXCJub21lXCI6XCJKT0FPIFZJVE9SXCIsXCJhdXRvcml6YWNvZXNcIjpbe1wiaWRcIjoxLFwibm9tZVwiOlwiUk9MRV9BbHVub1wiLFwiYXV0aG9yaXR5XCI6XCJST0xFX0FsdW5vXCJ9XSxcImNmY1wiOntcIm5vbWVGYW50YXNpYVwiOlwiQU5PVkEgU0lTVEVNQVMgTFREQVwiLFwiY25walwiOlwiMDYuMDYyLjkzMy8wMDAxLTkwXCIsXCJjZXBcIjpcIjEyMjM5LTAwOVwiLFwiZW5kZXJlY29cIjpcIlJ1YSBSaW8gQ2FuaW5kZVwiLFwiYmFpcnJvXCI6XCJKYXJkaW0gU2FudGEgSW5lcyBJSVwiLFwiY2lkYWRlXCI6XCJTYW8gSm9zZSBkb3MgQ2FtcG9zXCIsXCJ1ZlwiOlwiU1BcIixcIm51bWVyb1wiOlwiNTBcIixcInRlbGVmb25lXCI6XCIoMTIpIDMzMzEtMTMzM1wiLFwiZW1haWxcIjpcInRlc3RlQGhvdG1haWwuY29tXCJ9LFwiZW1haWxcIjpcIm1pbWkuZmdhbHZhbzEwMDNAZ21haWwuY29tXCIsXCJmb3RvXCI6XCJodHRwOi8vZWNvbmR1dG9yY2ZjLmNvbS9hbHVub3MvZm90b3MvMjU3Mi5qcGdcIixcInVzZXJuYW1lXCI6XCJKT0FPIFZJVE9SXCJ9IiwiaXNzIjoiYnIuY29tLmNvbmV4YW9sb2NhbC5lY29uZHV0b3IiLCJzdWIiOiJKT0FPIFZJVE9SIn0.v7epA2dLLNREkg2xOFuYBVxFBUvneg8iH2xHv85VCJ4_grrAjgBch9O2ST9zSTBfWO9FJA4J9wnY34u5p_zdGQ');
    }
}

getToken(){
    let token=localStorage.getItem(STORAGE_KEYS.token);
    if(token==null){
        return null;
    }
    else{
        return token;
    }
}

}
