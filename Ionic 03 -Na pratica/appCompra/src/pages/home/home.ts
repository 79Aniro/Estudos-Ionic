import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { ICurso } from '../../interfaces/ICurso';
import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: ICurso[];
  constructor(public navCtrl: NavController,public cursoProvider:CursosProvider) {

    this.lista=cursoProvider.all();
  }

  abreDetalhe(item: any) {

    this.navCtrl.push(DetalhePage, { item: item });

  }

}
