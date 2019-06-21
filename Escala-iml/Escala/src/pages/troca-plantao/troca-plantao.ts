import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantaoDTO, buildPlantao } from '../../modelos/plantao';
import { StorageProvider } from '../../providers/storage/storage';
import { buildUsuarioDTO } from '../../modelos/usuario-dto';



@IonicPage()
@Component({
  selector: 'page-troca-plantao',
  templateUrl: 'troca-plantao.html',
})
export class TrocaPlantaoPage {

  plantoes: PlantaoDTO[] = []
  plantao: PlantaoDTO = buildPlantao();
  cargaHorariaN: string;
  ch: string
  dttroca: Date;
  plantonistaN: string;
  abreNovaData: number = 0;
  idref = 0;
  trocadoV: string = "false"
  usuario = buildUsuarioDTO();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public localStorage: StorageProvider) {
  }

  ionViewDidLoad() {
    this.plantoes = this.localStorage.getPlantoes();

    this.usuario = this.localStorage.getUsuario();

    this.idref = this.localStorage.getId();

    this.plantao = this.navParams.get('plantao');
    this.ch = this.plantao.cargaHoraria;
    if (this.ch != "24 horas") {

      this.cargaHorariaN = this.ch;
    }



  }

  trocar() {

    let dt = new Date(this.dttroca);
    let dt2 = dt.setHours(24);
    let dt3 = new Date(dt2);
    if (this.cargaHorariaN == this.plantao.cargaHoraria && this.trocadoV == "false") {



      this.plantao.novoEscalado = this.plantonistaN;

      let tam = this.plantoes.length;

      for (let i = 0; i < tam; i++) {

        if (this.plantoes[i].id == this.plantao.id) {

          this.plantoes[i].novoEscalado = this.plantao.novoEscalado;
          this.plantoes[i].troca = 'true';
          this.plantoes[i].trocaTexto = 'Sim';
          break;
        }
      }
      this.localStorage.setId(this.idref);
      this.localStorage.setPlantoes(this.plantoes);



    }
    else
      if (this.cargaHorariaN == this.plantao.cargaHoraria && this.trocadoV != "false") {


        this.plantao.novoEscalado = this.plantonistaN;
        console.log(this.plantonistaN);
        let tam = this.plantoes.length;
        let dt = new Date(this.dttroca);
        let dt2 = dt.setHours(24);
        let dt3 = new Date(dt2);
        for (let i = 0; i < tam; i++) {

          if (this.plantoes[i].id == this.plantao.id) {

            this.plantoes[i].novoEscalado = this.plantao.novoEscalado;
            this.plantoes[i].troca = 'true';
            this.plantoes[i].trocaTexto = 'Sim';
            this.plantoes[i].novaData = dt3.getMilliseconds();
            this.plantoes[i].novaDataString = dt3.toLocaleDateString();
            break;
          }
        }

        let plant: PlantaoDTO = buildPlantao();

        plant.id = this.idref++;
        plant.escalado = this.usuario.apelido;

        plant.data = dt3.getMilliseconds();
        plant.dataString = dt3.toLocaleDateString();
        plant.troca = "true";
        plant.trocaTexto = "Sim";
        this.plantoes.push(plant);

        this.localStorage.setId(this.idref);
        this.localStorage.setPlantoes(this.plantoes);

      }
      else
        if (this.plantao.cargaHoraria == '24 horas' && this.cargaHorariaN == '12 Horas Diurna' && this.trocadoV == "false") {

          let plantaoD: PlantaoDTO = buildPlantao();
          let plantaoN: PlantaoDTO = buildPlantao();

          plantaoD.escalado = this.plantao.escalado;
          plantaoD.id = this.idref++;
          plantaoD.cargaHoraria = "12 Horas Diurna";
          plantaoD.novoEscalado = this.plantonistaN;

          let dt = new Date(this.plantao.data);
          let dt2 = dt.setHours(24);
          let dt3 = new Date(dt2);
          plantaoD.data = this.plantao.data;
          plantaoD.dataString = dt3.toLocaleDateString();
          plantaoD.troca = 'true'
          plantaoD.trocaTexto = 'Sim';

          this.plantoes.push(plantaoD);


          plantaoN.escalado = this.plantao.escalado;
          plantaoN.id = this.idref++;
          plantaoN.cargaHoraria = "12 Horas Noturna";
          plantaoN.novoEscalado = "";
          plantaoN.data = this.plantao.data;
          
          let dtt = new Date(this.plantao.data);
          let dtt2 = dt.setHours(24);
          let dtt3 = new Date(dt2);
          plantaoN.dataString = dtt3.toLocaleDateString();
          plantaoN.troca = 'false'
          plantaoN.trocaTexto = 'Não';
          this.plantoes.push(plantaoN);

          let list: PlantaoDTO[] = []
          for (let item of this.plantoes) {

            if (item.id != this.plantao.id) {

              list.push(item);
            }

          }

          this.plantoes = [];
          this.plantoes = list;
          this.localStorage.setId(this.idref);
          this.localStorage.setPlantoes(this.plantoes);

        }
        else
          if (this.plantao.cargaHoraria == '24 horas' && this.cargaHorariaN == "12 Horas Noturna" && this.trocadoV == "false") {

            let plantaoD: PlantaoDTO = buildPlantao();
            let plantaoN: PlantaoDTO = buildPlantao();

            plantaoD.escalado = this.plantao.escalado;
            plantaoD.id = this.idref++;
            plantaoD.cargaHoraria = "12 Horas Noturna";
            plantaoD.novoEscalado = this.plantonistaN;
            
            let dt = new Date(this.plantao.data);
            let dt2 = dt.setHours(24);
            let dt3 = new Date(dt2);
            plantaoD.data = this.plantao.data;
            plantaoD.dataString = dt3.toLocaleDateString();
            plantaoD.troca = 'true'
            plantaoD.trocaTexto = 'Sim';

            this.plantoes.push(plantaoD);


            plantaoN.escalado = this.plantao.escalado;
            plantaoN.id = this.idref++;
            plantaoN.cargaHoraria = "12 Horas Diurna";
            plantaoN.novoEscalado = "";
            plantaoN.data = this.plantao.data;
            let dtt = new Date(this.plantao.data);
            let dtt2 = dt.setHours(24);
            let dtt3 = new Date(dt2);
            plantaoN.dataString = dtt3.toLocaleDateString();
            plantaoN.troca = 'false'
            plantaoN.trocaTexto = 'Não';
            this.plantoes.push(plantaoN);

            let list: PlantaoDTO[] = []
            for (let item of this.plantoes) {

              if (item.id != this.plantao.id) {

                list.push(item);
              }

            }

            this.plantoes = [];
            this.plantoes = list;
            this.localStorage.setId(this.idref);
            this.localStorage.setPlantoes(this.plantoes);

          }
          else
            if (this.plantao.cargaHoraria == '24 horas' && this.cargaHorariaN == '12 Horas Diurna' && this.trocadoV != "false") {

              this.plantao.novoEscalado = this.plantonistaN;

              let tam = this.plantoes.length;

              
              let dt = new Date(this.dttroca);
              let dt2 = dt.setHours(24);
              let dt3 = new Date(dt2);
              for (let i = 0; i < tam; i++) {

                if (this.plantoes[i].id == this.plantao.id) {

                  this.plantoes[i].novoEscalado = this.plantao.novoEscalado;
                  this.plantoes[i].troca = "true";
                  this.plantoes[i].trocaTexto = "Sim";
                  this.plantoes[i].trocado = "true"
                  this.plantoes[i].trocado = "Sim"
                  this.plantoes[i].novaData = dt3.getMilliseconds()
                  this.plantoes[i].novaDataString = dt3.toLocaleDateString();
                  break;
                }
              }

              let pl: PlantaoDTO = buildPlantao();
              pl.cargaHoraria = "12 Horas Noturna";
              pl.data = dt3.getMilliseconds();
              pl.dataString = dt.toLocaleDateString();
              pl.troca = "true";
              pl.trocaTexto = "Sim";
              pl.id = this.idref++;
              pl.escalado = this.plantoes[0].escalado;
              this.plantoes.push(pl);
              this.localStorage.setId(this.idref);
              this.localStorage.setPlantoes(this.plantoes);

            }

            else
              if (this.plantao.cargaHoraria == "24 horas" && this.cargaHorariaN == "12 Horas Noturna" && this.trocadoV != "false") {

                this.plantao.novoEscalado = this.plantonistaN;

                let tam = this.plantoes.length;

                let dt = new Date(this.dttroca);
                let dt2 = dt.setHours(24);
                let dt3 = new Date(dt2);
                for (let i = 0; i < tam; i++) {

                  if (this.plantoes[i].id == this.plantao.id) {

                    this.plantoes[i].novoEscalado = this.plantao.novoEscalado;
                    this.plantoes[i].troca = "true";
                    this.plantoes[i].trocaTexto = "Sim";
                    this.plantoes[i].trocado = "true"
                    this.plantoes[i].trocado = "Sim"
                    this.plantoes[i].novaData = dt3.getMilliseconds()
                    this.plantoes[i].novaDataString = dt3.toLocaleDateString();
                    break;
                  }
                }

                let pl: PlantaoDTO = buildPlantao();
                pl.cargaHoraria = "12 Horas Diurna";
                pl.data = dt.getMilliseconds();
                pl.dataString = dt.toLocaleDateString();
                pl.troca = "true";
                pl.trocaTexto = "Sim";
                pl.id = this.idref++;
                pl.escalado = this.plantoes[0].escalado;
                this.plantoes.push(pl);
                this.localStorage.setId(this.idref);
                this.localStorage.setPlantoes(this.plantoes);

              }

    this.navCtrl.push('ListaPlantaoPage')
  }

  abreNovaDataS() {
    this.abreNovaData = 1
  }

  fechaNovaDataS() {
    this.abreNovaData = 0;
  }

}
