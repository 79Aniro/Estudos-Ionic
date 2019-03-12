import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private dodument:DocumentViewer,
    private file:File,
    private transfer: FileTransfer,
    private platform:Platform) {

  }


  openLocalPdf(){
const options:DocumentViewerOptions={
  title:"mequ-arquivo"
}
this.dodument.viewDocument('assets/arquivo.pdf','application/pdf',options);
  }

  dowloandAndOpenPdf(){
let path =null;
if(this.platform.is('ios')){
  path=this.file.documentsDirectory;
}else{
  path=this.file.dataDirectory;
}
const transfer=this.transfer.create();

transfer.download('https://habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf',path+'myfile.pdf').then(entry=>{
  let url= entry.toUrl();
  alert(url);
  this.dodument.viewDocument(url,'application/pdf',{});
})
  }

}
