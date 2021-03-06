import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { SobrePage } from '../sobre/sobre';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;  
  tab2Root = FeedPage;
  tab3Root = ConfiguracoesPage;
  tab4Root = SobrePage;
  tab5Root = PerfilPage;

  constructor() {

  }
}
