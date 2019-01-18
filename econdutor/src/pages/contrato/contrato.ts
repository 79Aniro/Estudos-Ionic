import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Modal, ModalController, } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';

import { FileOpener } from '@ionic-native/file-opener';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerPage } from '../pdf-viewer/pdf-viewer';
//import { PdfViewerPage } from './../pages/pdf-viewer/pdf-viewer';

@IonicPage()
@Component({
  selector: 'page-contrato',
  templateUrl: 'contrato.html',
})
export class ContratoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private document:DocumentViewer, private file:File, private fileOpener: FileOpener,
  public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratoPage');
  }

  abrirPdfLocal(){

    console.log("entrou");
    this.fileOpener.open('/assets/imgs/contrato.pdf','application/pdf');
  }

  onOpenPDF(): void {
    let modal: Modal = this.modalCtrl.create(PdfViewerPage, {
      displayData: {
        pdfSource: {
          url: 'src/assets/imgs/contrato.pdf'
        }
      }
    });
    modal.present();
  }

}
