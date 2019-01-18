
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from '../../modelos/CredenciaisDTO';


import { API_CONFIG } from "../../config/api.config";
import { Http } from '@angular/http';

import {  HttpClient } from "@angular/common/http";
import { HTTP } from '@ionic-native/http';
import { Platform } from 'ionic-angular';

@Injectable()
export class LoginProvider {
  
  basepath="https://defesa-civil-acm.herokuapp.com/aluno/logando"

  constructor(public http: HttpClient, private httpNative: HTTP,
    private plataform: Platform) {

   /*   if(plataform.is('cordova')){
        this.basepath='https://defesa-civil-acm.herokuapp.com/aluno/logando'
      }*/ //proxy para driblar cors
    }
  
  /*  authenticate(login: CredenciaisDTO) {
    
    return this.http.post(`${this.basepath}`, login, {
      observe: "response",
      responseType: "text",
      headers: { "Content-Type": "application/json" },
    
    });
  }*/

  /*authenticate(login:CredenciaisDTO){

    this.httpNative.setRequestTimeout(3600);
    this.httpNative.setDataSerializer('json');
    return this.httpNative.post(this.basepath+'/login',login,{})
  }*/

  authenticate(login: CredenciaisDTO) {
    
    return this.http.post(`${API_CONFIG.baseProd}/login/app`, login, {
      observe: "response",
      responseType: "text",
      headers: { "Content-Type": "application/json" },
    
    });
  }

  

  esqueciSenha(email: string) {
    return this.http.post(`${API_CONFIG.baseProd}/redefinir`, email, {
      observe: "response",
      responseType: "json",
      headers: { "Content-Type": "application/json" }
    });
  }



  logarTeste1(login:CredenciaisDTO){
   this.http.post(`${API_CONFIG.baseProd}login`,login,
   
   {
    headers: { "Content-Type": "application/json" }
   })

   
  }

  lo(login: CredenciaisDTO){
   return this.httpNative.post(API_CONFIG.baseProd, login, { "Content-Type": "application/json" })
  // return this.http2.post(`${API_CONFIG.servidorBaseUrl}login`, login,{
  }
}




/*
HttpClient client = new HttpClient();
client.BaseAddress = new Uri("http://example.com/");
client.DefaultRequestHeaders
      .Accept
      .Add(new MediaTypeWithQualityHeaderValue("application/json"));//ACCEPT header

HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, "relativeAddress");
request.Content = new StringContent("{\"name\":\"John Doe\",\"age\":33}",
                                    Encoding.UTF8, 
                                    "application/json");//CONTENT-TYPE header

client.SendAsync(request)
      .ContinueWith(responseTask =>
      {
          Console.WriteLine("Response: {0}", responseTask.Result);
      });

      */