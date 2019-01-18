import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { InstrucoesPageModule } from './instrucoes.module';
import { buildInstrucaoDto } from '../../modelos/instrucao-dto';


@IonicPage()
@Component({
  selector: 'page-instrucoes',
  templateUrl: 'instrucoes.html',
})
export class InstrucoesPage {

  texto:string="Primeira Habilitação – Permissão para Dirigir É um documento de autorização que você recebe após sua aprovação nos exames  necessários e que o habilita a conduzir veículos pelo período de um ano. Após esse  período, desde que você não tenha cometido nenhuma infração grave ou gravíssima  nem seja reincidente em infração média, será conferida a você a Carteira Nacional de  Habilitação Carteira Nacional de Habilitação CNH (Carteira Nacional de Habilitação) é o documento oficial que atesta que você está  apto a conduzir veículos automotores e elétricos, conforme a(s) categoria(s) em que  se encontra habilitado. Idade mínima para o início do processo de primeira habilitação  De acordo com o CTB (Código de Trânsito Brasileiro), somente após completar 18 anos  você poderá iniciar o processo para a obtenção da primeira habilitação.  Categorias de habilitação  As categorias de habilitação iniciam em “A” e vão até a “E”. Em seguida explicaremos  cada uma delas.  Processo de habilitação por categoria  Você poderá, ao mesmo tempo, iniciar o processo de habilitação nas categorias “A”  e “B”, realizando somente uma Avaliação Psicológica, um Exame de Aptidão Física e  Mental e um único Exame Teórico-Técnico, desde que seja considerado apto em todos  e realize o exame de direção veicular para cada uma das categorias.  Obrigatoriedade da CNH  e/ou Permissão para Dirigir  Lembramos a você que é obrigatório  estar com a Permissão para Dirigir ou  com a Carteira Nacional de Habilitação  quando estiver conduzindo um veículo."
  
  instrucao:{
    titulo:string;
    texto:string
  }
 
  i:number=0;
  items:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popover: PopoverController) {
     
  }

  ionViewDidLoad() {
   
    this.instrucao=buildInstrucaoDto();
        this.instrucao.texto="É um documento de autorização que você recebe após sua aprovação nos exames  necessários e que o habilita a conduzir veículos pelo período de um ano. Após esse  período, desde que você não tenha cometido nenhuma infração grave ou gravíssima  nem seja reincidente em infração média, será conferida a você a Carteira Nacional de  Habilitação.";
        this.instrucao.titulo = 'Carteira Nacional de Habilitação';
        this.items.push(this.instrucao);
         
    this.instrucao=buildInstrucaoDto();
       this.instrucao.titulo="Primeira Habilitação – Permissão para Dirigir";
       this.instrucao.texto="CNH (Carteira Nacional de Habilitação) é o documento oficial que atesta que você está     apto a conduzir veículos automotores e elétricos, conforme a(s) categoria(s) em que     se encontra habilitado.";    
       this.items.push(this.instrucao);

       this.instrucao=buildInstrucaoDto();
       this.instrucao.titulo="Idade mínima para o início do processo de primeira habilitação";
       this.instrucao.texto="De acordo com o CTB (Código de Trânsito Brasileiro), somente após completar 18 anos  você poderá iniciar o processo para a obtenção da primeira habilitação";    
       this.items.push(this.instrucao);

       this.instrucao=buildInstrucaoDto();
       this.instrucao.titulo="Categorias de habilitação";
       this.instrucao.texto="As categorias de habilitação iniciam em “A” e vão até a “E”. Em seguida explicaremos cada uma delas.";    
       this.items.push(this.instrucao);

       this.instrucao=buildInstrucaoDto();
       this.instrucao.titulo="Processo de habilitação por categoria";
       this.instrucao.texto="Você poderá, ao mesmo tempo, iniciar o processo de habilitação nas categorias “A” e “B”, realizando somente uma Avaliação Psicológica, um Exame de Aptidão Física e Mental e um único Exame Teórico-Técnico, desde que seja considerado apto em todos  e realize o exame de direção veicular para cada uma das categorias.";    
       this.items.push(this.instrucao);

       this.instrucao=buildInstrucaoDto();
       this.instrucao.titulo="Obrigatoriedade da CNH e/ou Permissão para Dirigir";
       this.instrucao.texto="Lembramos a você que é obrigatório estar com a Permissão para Dirigir ou com a Carteira Nacional de Habilitação quando estiver conduzindo um veículo.";    
       this.items.push(this.instrucao);

       this.instrucao=buildInstrucaoDto();
       this.instrucao.titulo="Requisitos necessários para você se candidatar à primeira habilitação";
       this.instrucao.texto="Ser penalmente imputável (ter 18 anos completos); Saber ler e escrever; Possuir documento de identidade ou equivalente; CPF (Cadastro de Pessoa Física)";    
       this.items.push(this.instrucao);
}


}
