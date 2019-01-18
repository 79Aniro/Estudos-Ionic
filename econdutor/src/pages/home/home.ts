import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, MenuController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlunoDTO } from '../../modelos/aluno-dto';
import { CredenciaisDTO } from '../../modelos/CredenciaisDTO';
import { LoginProvider } from '../../providers/login/login';
import { StorageProvider } from '../../providers/storage/storage';


//novas importações
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/timeout';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formGroup: FormGroup;
  mensagemEmail: String = "";
  isTextFieldType: boolean;
  login: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  aluno: AlunoDTO;

  token: string;


  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public log: LoginProvider,
    public localStorage: StorageProvider,
    public alertCtrl: AlertController,
    public http: HttpClient


  ) {

  }


  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidLoad() {
    /*apagando dados do localstorage
    Quando o aluno sair do sistema o app apaga suas informações do aparelho*/
    this.localStorage.setLocalAluno(null);
    this.localStorage.setLocalUser(null);
    this.localStorage.setToken(null);


  }


  logar() {


    if (this.login.email == null || this.login.email == "") {

      this.mensagemEmail = this.alertEmailCampoObrigatorio();
    }
    else
      if (this.login.email.indexOf('@') == -1) {
        this.mensagemEmail = "E-mail Inválido"
      }
      else {


        this.autenticacao(this.login);


      }
  }

  sendPostRequest() {
    alert("lgar");

  }

  alertEmailCampoObrigatorio() {

    return "Campo Obrigatorio";
  }

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
    if (this.login.email == null || this.login.email == "") {
      this.mensagemEmail = " ";
    }
  }

  limpar() {
    this.mensagemEmail = " ";

  }

  esqueciSenha() {

    if (this.login.email == null || this.login.email == "") {
      this.mensagemEmail = this.alertEmailCampoObrigatorio();
    }
    else {
      this.log.esqueciSenha(this.login.email)
        .subscribe(response => {
          var resp = response;

          if (response.body == 'false') {
            this.showToastAlertLogin();
          }
          else {
            this.showEmailEnviado();
          }
        }, error => {
          this.showAlertFalhaEmail();
        })
    }
  }


  autenticacao(login: CredenciaisDTO) {

    this.log.authenticate(login)
      .subscribe(response => {

        let v = response;

        this.aluno = JSON.parse(response.body);

        console.log(this.aluno);

        this.localStorage.setLocalAluno(this.aluno);
        this.localStorage.setToken(this.aluno.token);

        this.navCtrl.push('TelaInicialPage', { codigo: this.aluno.codigo });



      },
        error => {
          this.showToastNaoConectado();

        });



    // this.sendRequest(login);

    /*   this.log.authenticate(login).then(data=>{
         console.log(data.data);
       }).catch(error=>{
         console.log(error.message)
       })*/
  }


  showToastNaoConectado() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível conectar',
      duration: 2000,
      position: 'middle',


    });
    toast.present(toast);
  }



  showToastAlertLogin() {
    let toast = this.toastCtrl.create({
      message: 'Login ou senha inválido',
      duration: 2000,
      position: 'middle',
      cssClass: "cssAlert_my",


    });
    toast.present(toast);
  }

  showEsqueciSenha() {
    let toast = this.toastCtrl.create({
      message: 'Email não encontrado',
      duration: 2000,
      position: 'middle',
      cssClass: "cssAlert_my",


    });
    toast.present(toast);
  }

  showEmailEnviado() {
    let toast = this.toastCtrl.create({
      message: 'Email enviado',
      duration: 2000,
      position: 'middle',
      cssClass: "cssAlert_my",


    });
    toast.present(toast);
  }

  showAlertFalhaEmail() {
    let toast = this.toastCtrl.create({
      message: 'Falha ao enviar email de recuperação!',
      duration: 2000,
      position: 'middle',
      cssClass: "cssAlert_my",


    });
    toast.present(toast);
  }






  //novos metodos
  sendRequest(json) {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    headers = headers.append('Access-Control-Max-Age', '1000');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

    this.http.post("http://webservice.econdutorcfc.com.br/login", json, { headers: headers })
      .subscribe(data => {
        alert(data['_body'] + " SUCCESS");
      }, error => {
        alert(JSON.stringify(error) + " ERROR");
      });
    /* return this.http.post("http://webservice.econdutorcfc.com.br/login", json, {headers: headers}).then(data => {
     alert(JSON.stringify(data, Object.getOwnPropertyNames(data)) + " 1234");
       alert(data.status);
       alert(data.data); // data received by server
       alert(data.headers);
 
     })
       .catch(error => {
         
         alert(JSON.stringify(error, Object.getOwnPropertyNames(error)));
         alert(error.status);
         alert(error.error); // error message as string
         alert(error.headers);
 
       });*/
  }
}

