import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public loginForm:any;
  public errorEmail=false;
  public messageEmail=""
  public erroSenha=false
  public messageSenha="";

  constructor(public formBuilder: FormBuilder) {

    this.loginForm= formBuilder.group({
      email:['',Validators.required],
      senha:['',Validators.compose([Validators.minLength(6),Validators.maxLength(20),
                Validators.required])]
    })
  }

  login(){

    let{email,senha}=this.loginForm.controls;

    if(!this.loginForm.valid){
      if(!email.valid){
        this.errorEmail=true;
        this.messageEmail="Ops! Email invalido"
      } else{
        this.messageEmail=" ";
      }

      if(!senha.valid){

        this.erroSenha=true
        this.messageSenha="Ops! Senha invalida";
       } else{
         this.messageSenha=' ';
       }
    } else{
      alert("Login realizado");
    }

 
  }

}
