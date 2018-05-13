import { Component, OnInit } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

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
export class HomePage implements OnInit {

  usuario?: UsuarioModel;
  login: any;
  db: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.usuario = new UsuarioModel();
    /*
    var db = database().ref("/usuarios")
    db.on("value", (snapshot)=>{
      console.log(snapshot.val());
    })
    */
    
  }

  ngOnInit(): void {
    this.login = this.navParams.get("login")
    //console.log(this.login.uid)
    this.db = database().ref("/usuarios/"+this.login.uid);
    this.init();
  }

  // Carrega dados do banco
  init(){
    this.db.on('value', data=>{
      this.usuario = data.val();
    })
  }

  openConversa(conversa_id){
    //console.log(conversa_id)
    var conversa = database().ref("/conversas/"+conversa_id);
    this.navCtrl.push(ConversaPage, {conversa: conversa, uid: this.login.uid})
    
  }

  listContatos(){
    this.navCtrl.push(ContatosPage)
  }
}
