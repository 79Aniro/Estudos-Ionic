import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheAulasDto } from '../../modelos/detalhe-aulas-dto';



@IonicPage()
@Component({
  selector: 'page-aula-agendada',
  templateUrl: 'aula-agendada.html',
})
export class AulaAgendadaPage {

 /* aula1: DetalheAulasDto = {
    hora_inicial: '08:00',
    hora_final: '09:40',
    data: '12/07/2018',
    titulo: 'Agendada',
    matricula: 'Primeira Habilitacao',
    veiculo: 'FIESTA-FORD',
    instrutor: 'ALESSANDRA REGINA DA SILVA',
  }*/
 
  aula2: DetalheAulasDto = {
    hora_inicial: '',
    hora_final: '',
    data: '',
    titulo: '',
    matricula: '',
    veiculo: '',
    instrutor: 'ALESSANDRA REGINA DA SILVA',
  }
  hora_inicial:string;
  hora_final:string;
  data:string;
  titulo:string;
  matricula:string;
  veiculo:string;
  instrutor:string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    this.hora_inicial=this.navParams.get('hora_inicial');    
    this.hora_final=this.navParams.get('hora_final');
    this.data=this.navParams.get('data');
    this.titulo=this.navParams.get('titulo');
    this.matricula=this.navParams.get('matricula');
    this.veiculo=this.navParams.get('veiculo');
    this.instrutor=this.navParams.get('instrutor');
  }

}
