import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViaturaDTO, buildViaturaDto } from '../../modelos/viatura';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { buildIdReferenciaDTO, idReferenciaDTO } from '../../modelos/id-referncia';
import { UteisProvider } from '../../providers/uteis/uteis';



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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public localStorege:StorageServiceProvider,
    public uteis:UteisProvider) {

      this.formGroup = this.formBuilder.group({
        placa: ['', [Validators.required]],
        patrimonio: ['', [Validators.required]],
        kilometragem: ['', [Validators.required]],
        modelo: ['', [Validators.required]],
        anoFabricacao: ['', [Validators.required]],
        ultimaRevisao: ['', ],
        ultimaRevisaoKm: ['', ],
        proximaRevisao: [null, ],
        proximaRevisaoKm: [null,],
        ultimaTrocaPneus: ['', ],
        proximaTrocaPneus: ['', ],
        observacao: ['', ],
      
  
      });
  }

  ionViewDidLoad() {
    
  }

  insereOco(){

    let id:idReferenciaDTO;
    id=buildIdReferenciaDTO();
    id=this.localStorege.getId();
    this.viatura=this.formGroup.value;
    this.viatura.id=id.id;
 
     var dat1= new Date(this.viatura.ultimaRevisao);
     
    this.viatura.ultimaRevisaoTexto=dat1.toLocaleDateString();
    var dat2= new Date(this.viatura.proximaRevisao);
  
   this.viatura.proximaRevisaoTexto=dat2.toLocaleDateString();
   var dat3= new Date(this.viatura.ultimaTrocaPneus);
   
   this.viatura.ultimaTrocaPneusTexto=dat3.toLocaleDateString();
   var dat4= new Date(this.viatura.proximaTrocaPneus);
   
  this.viatura.proximaTrocaPneusTexto=dat4.toLocaleDateString();
    this.localStorege.addViatura(this.viatura);
    this.localStorege.setId(id);
   this.formGroup.reset();
    
    
  
  }

  calcularProximaRevisao(){
    this.viatura.ultimaRevisao=this.formGroup.controls.ultimaRevisao.value;
let d = new Date(this.viatura.ultimaRevisao)
d.setHours(4320)
    this.viatura.ultimaRevisao=d;
    var dat=new Date(this.viatura.ultimaRevisao);
    this.viatura.proximaRevisao=dat;
    this.formGroup.controls.proximaRevisao.setValue(this.viatura.proximaRevisao);
    this.dataV=this.viatura.proximaRevisao;
    var dat2=new Date(this.viatura.proximaRevisao);
   
    console.log(dat2);
  }
  calcularProximaRevisaoKM(){
    let n=10000;
    let v= parseInt(this.ultimaRevisaoKmV.toString())+parseInt(n.toString());
   this.formGroup.controls.proximaRevisaoKm.setValue(v);
    
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
