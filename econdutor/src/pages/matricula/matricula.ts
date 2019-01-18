import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MatriculaDTO, buildMatriculaDTO } from '../../modelos/matricula-dto';
import {
  MatriculaWebDTO,
  buildMatriculaWebDTO
} from "../../modelos/matricula-web-dto";

import { ItemVendaDTO, buildItemVendaDTO } from '../../modelos/item-venda-dto';
import { ItemVendaWEBDTO } from '../../modelos/item-venda-web-dto';
import { MatriculaProvider } from "../../providers/matricula/matricula";
import { ItemVendaProvider } from "../../providers/item-venda/item-venda";
import { StorageProvider } from "../../providers/storage/storage";




@IonicPage()
@Component({
  selector: "page-matricula",
  templateUrl: "matricula.html"
})
export class MatriculaPage {
  matricula: MatriculaDTO = buildMatriculaDTO();

  matriculaWeb: MatriculaWebDTO ;

  list:ItemVendaWEBDTO[]=[]
  lista:ItemVendaDTO[]=[]
  matriz:ItemVendaDTO=buildItemVendaDTO();


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: MatriculaProvider,
    public serviceItem: ItemVendaProvider,
    public localstorage:StorageProvider
  ) {}

  /**
   * 0 - Primeira Habilitação <br>
   * 1 - Reabilitação de Permissionário <br>
   * 2 - Renovação <br>
   * 3 - Adição de Categoria / Mudança de Categoria <br>
   * 4 - Registro de CNH Estrangeira <br>
   */
  ionViewDidLoad() {
    let codigo=2572
    this.buscaMatricula(codigo);
    this.buscaItemVenda(codigo);
  }

  buscaMatricula(codigo: number) {
    this.service.buscarMatricula(codigo).subscribe(response => {
      this.matriculaWeb = response;
      this.matricula.titulo = this.defineTitulo(this.matriculaWeb.tipoContrato);
    
      this.matricula.aulas = this.matriculaWeb.numeroAulas.toString();
      this.matricula.data_matricula = new Date(
        this.matriculaWeb.data
      ).toLocaleDateString();
      this.matricula.categorias=this.defineCategorias(this.matriculaWeb)
    });
  }


  buscaItemVenda(codigo:number){

    this.serviceItem.buscarItemVenda(codigo).
    subscribe(response=>{

      this.list=response;
      for(var item of this.list){

        this.matriz.tipo_servico=item.pacote.nome.toLocaleUpperCase();
        this.matriz.data_venda='Data da venda: '+(new Date(item.venda.data).toLocaleDateString());       
        this.matriz.total='Total: R$ '+item.venda.valorTotal.toString();
        this.matriz.quantidade=item.quantidade.toString();
        this.lista.push(this.matriz);
        this.matriz=buildItemVendaDTO();
      }
    })

  }

  defineTitulo(codigo: number) {
    switch (codigo) {
      case 0:
        return "Primeira Habilitação";
      case 1:
        return "Reabilitação de Permissionário";
      case 2:
        return "Renovação";
      case 3:
        return "Adição de Categoria / Mudança de Categoria";
      case 4:
        return "Registro de CNH Estrangeira";
      default:
        return "";
    }
  }

  defineCategorias(matricula: MatriculaWebDTO) {
    let mat: string = "";

    if (matricula.categoriaA >0) mat = mat + "A ";
    if (matricula.categoriaB >0) mat = mat + "B ";
    if (matricula.categoriaC >0) mat = mat + "C ";
    if (matricula.categoriaD >0) mat = mat + "D ";
    if (matricula.categoriaE >0) mat = mat + "E ";
    if (matricula.categoriaACC >0) mat = mat + "ACC ";
    
    
    return mat;
  }

  
}
