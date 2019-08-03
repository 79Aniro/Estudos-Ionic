import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViaturaDTO } from '../../modelos/viatura';



@IonicPage()
@Component({
  selector: 'page-insere-viatura',
  templateUrl: 'insere-viatura.html',
})
export class InsereViaturaPage {

  formGroup: FormGroup;
  viatura:ViaturaDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,) {

      this.formGroup = this.formBuilder.group({
        placa: ['', [Validators.required]],
        patrimonio: ['', [Validators.required]],
        kilometragem: ['', [Validators.required]],
        modelo: ['', [Validators.required]],
        anoFabricacao: ['', [Validators.required]],
        ultimaRevisao: ['', [Validators.required]],
        ultimaRevisaoKm: ['', [Validators.required]],
        proximaRevisao: ['', [Validators.required]],
        proximaRevisaoKm: ['', [Validators.required]],
        ultimaTrocaPneus: ['', [Validators.required]],
        proximaTrocaPneus: ['', [Validators.required]],
        observacao: ['', [Validators.required]],
      
  
      });
  }

  ionViewDidLoad() {
    
  }

  insereOco(){

    console.log(this.formGroup.value);

    
  
  }

/*  id:number;
    placa:string;
    patrimonio:string;
    kilometragem:number;
    modelo:string;
    anoFabricacao:number;
    ultimaRevisao:Date;
    ultimaRevisaoKm:number;
    proximaRevisaoKm:number;
    proximaRevisao:Date;
    ultimaTrocaPneus:Date;
    proximaTrocaPneus:Date;
    observacao:string;*/

}
