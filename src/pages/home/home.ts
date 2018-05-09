import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsuarioModel } from '../../model/usuario.model'
import { ConversaPage } from '../../pages/conversa/conversa'
import { ContatosPage } from '../../pages/contatos/contatos'
import { database } from "firebase"
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  usuario: UsuarioModel;
  db = database().ref("/usuarios/V4T3a5M0Speck6esVrDY9SkJLHL2");

  constructor(public navCtrl: NavController) {
    this.usuario = new UsuarioModel();
    /*
    var db = database().ref("/usuarios")
    db.on("value", (snapshot)=>{
      console.log(snapshot.val());
    })
    */
    this.db.on('value', data=>{
      this.usuario = data.val();
    })
  }

  openConversa(conversa_id){
    //console.log(conversa_id)
    var conversa = database().ref("/conversas/"+conversa_id);
    this.navCtrl.push(ConversaPage, {conversa: conversa})
    
  }

  listContatos(){
    this.navCtrl.push(ContatosPage)
  }
}
