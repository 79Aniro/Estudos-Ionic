import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViaturaDTO, buildViaturaDto } from '../../modelos/viatura';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { buildIdReferenciaDTO, idReferenciaDTO } from '../../modelos/id-referncia';
import { UteisProvider } from '../../providers/uteis/uteis';
import { DatePicker } from '@ionic-native/date-picker';




@IonicPage()
@Component({
  selector: 'page-insere-viatura',
  templateUrl: 'insere-viatura.html',
})
export class InsereViaturaPage {

  formGroup: FormGroup;
  viatura:ViaturaDTO= buildViaturaDto();
  dataV:Date;
  ultimaRevisaoKmV:number;
  ultimaRevisaoDateVar:Date

  placa: string;
  patrimonio: string;
  kilometragem: number;
  modelo: string;
  anoFabricacao:string;
  ultimaRevisao: Date;
  ultimaRevisaoTexto:string="";
  ultimaRevisaoKm: number;
  proximaRevisao: Date;
  proximaRevisaoTexto:string="";
  proximaRevisaoKm: number;
  ultimaTrocaPneus: Date;
  proximaTrocaPneus: Date;
  observacao: string;
  ultimaTrocaPneusTexto:string='';
  proximaTrocaPneusTexto:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public localStorege:StorageServiceProvider,
    public uteis:UteisProvider,
    public datePicker: DatePicker) {

     
  }

  ionViewDidLoad() {
    
    
  }

  insereOco(){

    let id:idReferenciaDTO;
    id=buildIdReferenciaDTO();
    id=this.localStorege.getId();
    this.viatura=buildViaturaDto();
    this.viatura.id=id.id;
 
    this.viatura.placa=this.placa;

    this.viatura.kilometragem=this.kilometragem;

    this.viatura.modelo=this.modelo;

     var dat1= new Date(this.ultimaRevisao);
     this.viatura.ultimaRevisao=dat1;
    this.viatura.ultimaRevisaoTexto=dat1.toLocaleDateString();
    var dat2= new Date(this.proximaRevisao);
  this.viatura.proximaRevisao=dat2;
   this.viatura.proximaRevisaoTexto=dat2.toLocaleDateString();
   var dat3= new Date(this.ultimaTrocaPneus);
   this.viatura.ultimaTrocaPneus=dat3;
   this.viatura.ultimaTrocaPneusTexto=dat3.toLocaleDateString();
   var dat4= new Date(this.proximaTrocaPneus);
   this.viatura.proximaTrocaPneus=dat4;
   this.viatura.observacao=this.observacao;
  this.viatura.proximaTrocaPneusTexto=dat4.toLocaleDateString();
    this.localStorege.addViatura(this.viatura);
    this.localStorege.setId(id);
  
    
    
  
  }

 
  calcularProximaRevisaoKM(){
    let n=10000;
    let v= parseInt(this.ultimaRevisaoKmV.toString())+parseInt(n.toString());
   this.proximaRevisaoKm=v;    
  }

  abrirCalandario(titulo:string){
    let dat:Date;
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      titleText:titulo
    }).then(
      date => {
      
        this.ultimaRevisao=date;
        this.ultimaRevisaoTexto=this.ultimaRevisao.toLocaleDateString();
        let d = new Date(this.ultimaRevisao)
d.setHours(4320)
    
    var dat=new Date(d);
    this.viatura.proximaRevisao=dat;
 
    this.proximaRevisaoTexto=dat.toLocaleDateString();
      },
      err => {
        alert("Não foi possivel atribuir data");
        
      }
    );
    
  }

  ultimaRevisaoF(){
   
   
      this.abrirCalandario("Ultima Revisão");
   
  }

  proximaRevisaoF(){
    let dat:Date;
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      titleText:"Proxima Revisão"
    }).then(
      date => {
        
        this.proximaRevisao=date;
        this.proximaRevisaoTexto=this.proximaRevisao.toLocaleDateString();
      },
      err => {
        alert("Não foi possivel atribuir data");
        
      }
    );
  }

  ultimaTrocaPneusF(){
    let dat:Date;
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      titleText:"Ultima Troca de Pneus"
    }).then(
      date => {
        
        this.ultimaTrocaPneus=date;
        this.ultimaTrocaPneusTexto=this.ultimaTrocaPneus.toLocaleDateString();
      },
      err => {
        alert("Não foi possivel atribuir data");
        
      }
    );
  }

  proximaTrocaPneusF(){
    let dat:Date;
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      titleText:"Próxima Troca de Pneus"
    }).then(
      date => {
        
        this.proximaTrocaPneus=date;
        this.proximaTrocaPneusTexto=this.proximaTrocaPneus.toLocaleDateString();
      },
      err => {
        alert("Não foi possivel atribuir data");
        
      }
    );
  }

/*  id:number;
    placa:string;
    patrimonio:string;
    kilometragem:number;
    modelo:string;
    anoFabricacao:number;
    ultimaRevisao:Date;
    ultimaRevisaoTexto:string;
    ultimaRevisaoKm:number;
    proximaRevisaoKm:number;
    proximaRevisao:Date;
    proximaRevisaoTexto:string;
    ultimaTrocaPneus:Date;
    ultimaTrocaPneusTexto:string;
    proximaTrocaPneus:Date;
    proximaTrocaPneusTexto:string;
    observacao:string;*/

}
