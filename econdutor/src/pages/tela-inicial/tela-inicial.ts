import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { AgendaDTO } from '../../modelos/agenta-dto';

import { DetalheAulasDto, buildDetalheAulasDto } from '../../modelos/detalhe-aulas-dto';
import { AgendaProvider } from '../../providers/agenda/agenda';
import { StorageProvider } from '../../providers/storage/storage';





/** Agenda
    * 0 - Aberta <br>
    * 1 - Finalizada <br>
    * 2 - Cancelada <br>
    * 3 - Iniciada <br>
    * 4 - Falta <br>
    * */

/**Matricula
* 0 - Primeira Habilitação <br>
* 1 - Reabilitação de Permissionário <br>
* 2 - Renovação <br>
* 3 - Adição de Categoria / Mudança de Categoria <br>
* 4 - Registro de CNH Estrangeira <br>
*/

@IonicPage()
@Component({
  selector: 'page-tela-inicial',
  templateUrl: 'tela-inicial.html',
})
export class TelaInicialPage {

  agendaAluno: AgendaDTO[];
  tipoContrato: string;
  titulo: string;

  aulaMatriz1: DetalheAulasDto = buildDetalheAulasDto();
  aulaMatriz2: DetalheAulasDto = buildDetalheAulasDto();
  aulaMatriz3: DetalheAulasDto = buildDetalheAulasDto();
  aulaMatriz4: DetalheAulasDto = buildDetalheAulasDto();
  aulaMatriz5: DetalheAulasDto = buildDetalheAulasDto();

  dat: string;

  ////////////////////////////////////////////////

  agendadas_quantidade: number = 0;
  titulo_agendadas: string = "Agendadas";
  finalizadas_quantidade: number = 0;
  titulo_finalizadas: string = "Finalizadas";
  faltas_quantidade: number = 0;
  titulo_faltas: string = "Faltas";
  canceladas_quantidade: number = 0;
  titulo_canceladas: string = "Canceladas";
  iniciadas_quantidade:number=0;
  titulo_iniciadas="Iniciadas"

  pet: string;


  category: string = 'gear';

  aula1: DetalheAulasDto = {
    hora_inicial: "10:00",
    hora_final: "11:00",
    data: '28/02/2018',
    titulo: 'Agendada',
    matricula: 'Primeira Habilitação',
    veiculo: "Fiesta-Ford",
    instrutor: 'Vitor Luiz de Azevedo'
  }

  itens_agendadas: any = [];
  itens_cancelada: any = [];
  itens_falta: any = [];
  itens_finalizada: any = [];
  itens_agendadas2: any = []
  itens_iniciadas: any=[]
  aula: DetalheAulasDto;

  list: any = [];//lista com todas as aulas

  constructor(public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public agendaProvider: AgendaProvider,
    public prov: StorageProvider) {



  }
  ionViewWillEnter() {

  }

  ionViewCanEnter() {


    //this.carregarInicio();
  }
  ionViewDidLoad() {



    this.buscarAgenda(this.prov.getLocalAluno().codigo); //codigo do aluno 
  }

  carregarInicio() {




  }

  detalheAula(hora_inicial: string, hora_final: string, data: string, titulo: string, matricula: string, veiculo: string, instrutor: string) {

    this.navCtrl.push('AulaAgendadaPage', { hora_inicial: hora_inicial, hora_final: hora_final, data: data, titulo: titulo, matricula: matricula, veiculo: veiculo, instrutor: instrutor });
  }






  carregarAgendadas() {

    this.itens_agendadas = this.itens_agendadas2;


  }
/*buscarAgenda(codigo:number){

  this.agendaProvider.buscarAgendaAluno(codigo).then((result:any)=>{

    alert(result);
  }).catch((error:any)=>{
    alert(error+"error");
  })
}*/

  buscarAgenda(codigo: number) {

    this.agendaProvider.buscarAgendaAluno(codigo)
      .subscribe(response => {
      
        this.agendaAluno = JSON.parse(JSON.stringify(response));
       

        var x: number = 0;

        for (let item of this.agendaAluno) {
          if (item.status == 0) {
            var d1 = new Date(item.dataInicio);

            var d1i = new Date(item.dataInicio);
            var d1f = new Date(item.dataTermino);
            var d1d = d1.toLocaleDateString().toString();
            this.aulaMatriz1.data = d1d;
            this.aulaMatriz1.hora_inicial = d1i.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz1.hora_final = d1f.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz1.titulo = 'Agendada';
            this.aulaMatriz1.matricula = this.definirMatricula(item.matricula.tipoContrato)
            this.aulaMatriz1.instrutor = item.instrutor.nome;
            var car1 = item.veiculo.modelo + "-" + item.veiculo.marca;

            this.aulaMatriz1.veiculo = car1;
            this.itens_agendadas2.push(this.aulaMatriz1);

            this.list.push(this.aulaMatriz1);
            this.agendadas_quantidade++;
            this.aulaMatriz1 = buildDetalheAulasDto();




          }
          else if (item.status == 1) {
            var d2 = new Date(item.dataInicio);

            var d2i = new Date(item.dataInicio);
            var d2f = new Date(item.dataTermino);
            var d2d = d2.toLocaleDateString().toString();
            this.aulaMatriz2.data = d2d;
            this.aulaMatriz2.hora_inicial = d2i.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz2.hora_final = d2f.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz2.titulo = 'Finalizada';
            this.aulaMatriz2.matricula = this.definirMatricula(item.matricula.tipoContrato)
            this.aulaMatriz2.instrutor = item.instrutor.nome;
            var car2 = item.veiculo.modelo + "-" + item.veiculo.marca;
            this.aulaMatriz2.veiculo = car2
            this.itens_finalizada.push(this.aulaMatriz2);
            this.list.push(this.aulaMatriz2);
            this.finalizadas_quantidade++;
            this.aulaMatriz2 = buildDetalheAulasDto();


          }
          else if (item.status == 2) {
            var d3 = new Date(item.dataInicio);


            var d3i = new Date(item.dataInicio);
            var d3f = new Date(item.dataTermino);
            var d3d = d3.toLocaleDateString().toString();
            this.aulaMatriz3.data = d3d;
            this.aulaMatriz3.hora_inicial = d3i.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz3.hora_final = d3f.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz3.titulo = 'Cancelada';
            this.aulaMatriz3.matricula = this.definirMatricula(item.matricula.tipoContrato)
            this.aulaMatriz3.instrutor = item.instrutor.nome;
            var car3 = item.veiculo.modelo + "-" + item.veiculo.marca;

            this.aulaMatriz3.veiculo = car3.toString();

            this.itens_cancelada.push(this.aulaMatriz3);

            this.list.push(this.aulaMatriz3);
            this.aulaMatriz3
            this.canceladas_quantidade++;
            this.aulaMatriz3 = buildDetalheAulasDto();
          }

          else if (item.status == 3) {
            var d4 = new Date(item.dataInicio);


            var d4i = new Date(item.dataInicio);
            var d4f = new Date(item.dataTermino);
            var d4d = d3.toLocaleDateString().toString();
            this.aulaMatriz5.data = d4d;
            this.aulaMatriz5.hora_inicial = d4i.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz5.hora_final = d4f.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz5.titulo = 'Iniciada';
            this.aulaMatriz5.matricula = this.definirMatricula(item.matricula.tipoContrato)
            this.aulaMatriz5.instrutor = item.instrutor.nome;
            var car5 = item.veiculo.modelo + "-" + item.veiculo.marca;

            this.aulaMatriz5.veiculo = car5.toString();

            this.itens_iniciadas.push(this.aulaMatriz5);

            this.list.push(this.aulaMatriz5);
            this.aulaMatriz5
            this.iniciadas_quantidade++;
            this.aulaMatriz5 = buildDetalheAulasDto();
          }

          else if (item.status == 4) {
            var d = new Date(item.dataInicio);

            var di = new Date(item.dataInicio);
            var df = new Date(item.dataTermino);
            var dd = d.toLocaleDateString().toString();
            this.aulaMatriz4.data = dd;
            this.aulaMatriz4.hora_inicial = di.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz4.hora_final = df.toLocaleTimeString().toString().substr(0, 5);
            this.aulaMatriz4.titulo = 'Falta';
            this.aulaMatriz4.matricula = this.definirMatricula(item.matricula.tipoContrato)
            this.aulaMatriz4.instrutor = item.instrutor.nome;
            var car = item.veiculo.modelo + "-" + item.veiculo.marca;

            this.aulaMatriz4.veiculo = car;
            this.itens_falta.push(this.aulaMatriz4);
            this.list.push(this.aulaMatriz4);
            this.faltas_quantidade++;
            this.aulaMatriz4 = buildDetalheAulasDto();
          }
        }

        this.itens_agendadas = this.list;
        this.pet = 'agendadas'



      }, error => {
        this.showToastNaoConectado();
        alert(error.message);

      })

  }




  showToastNaoConectado() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível conectar agenda',
      duration: 3000,
      position: 'middle'

    });
    toast.present(toast);
  }

  showToastConectado() {
    let toast = this.toastCtrl.create({
      message: 'Buscou agenda',
      duration: 3000,
      position: 'middle'

    });
    toast.present(toast);
  }

  definirContrato(contrato: number) {

    switch (contrato) {
      case 0:
        this.tipoContrato = "Primeira Habilitação";
        break;
      case 1:
        this.tipoContrato = "Reabilitação de Permissionário";
        break;
      case 2:
        this.tipoContrato = "Renovação";
        break;
      case 3:
        this.tipoContrato = "Adição de Categoria / Mudança de Categoria";
        break;
      case 4:
        this.tipoContrato = "Registro de CNH Estrangeira";
        break;
    }
  }

  definirTitulo(status: number) {

    switch (status) {
      case 0: // Agendada
        this.titulo = "Agendada"
        this.agendadas_quantidade++;
        break;

      case 1: // Finalizada
        this.titulo = "Finalizada"
        this.finalizadas_quantidade++;
        break;

      case 2: // Cancelada
        this.titulo = "Cancelada"
        this.canceladas_quantidade++;
        break;
      case 3: // Iniciada
        this.titulo = "Iniciada"        
        break;

      case 4: // Falta
        this.titulo = "Falta"
        this.faltas_quantidade++;
        break;
    }

  }
  definirMatricula(status: number): string {

    switch (status) {
      case 0: // Primeira Habilitação
        return "Primeira Habilitação"



      case 1: // Reabilitação de Permissionário
        return "Reabilitação de Permissionário"



      case 2: // Renovação
        return "Renovação"



      case 4: // Adição de Categoria
        return "Adição de Categoria"



      case 5: // Registro de CNH Estrangeira
        return "Registro de CNH Estrangeira"


    }

  }


}
