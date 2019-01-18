import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

/**
 * Generated class for the TestePdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste-pdf',
  templateUrl: 'teste-pdf.html',
})
export class TestePdfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document:DocumentViewer,private file:File,private transfer:FileTransfer,
    private platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePdfPage');
  }

  openPdf(){

   const options: DocumentViewerOptions={

    title:"My pdf"
   }
    this.document.viewDocument('src/assets/imgs/contrato.pdf','application/pdf',options)

  }

  dowloadAndOpenPdf(){

    let path=null
    if(this.platform.is('ios')){
      path=this.file.documentsDirectory;
    }
    else{
      path=this.file.dataDirectory;
    }

    const tranfer=this.transfer.create();
    tranfer.download("https://expoforest.com.br/wp-content/uploads/2017/05/exemplo.pdf",path+"myfile.pdf").then(entry=>{
      let url=entry.toUrl();
      this.document.viewDocument(url,'application/pdf',{});
    });

  }
}
