import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarContatoPage } from './buscar-contato';

@NgModule({
  declarations: [
    BuscarContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarContatoPage),
  ],
})
export class BuscarContatoPageModule {}
