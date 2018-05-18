import { Component, OnInit } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

import { UsuarioModel } from '../../model/usuario.model'
import { ConversaPage } from '../../pages/conversa/conversa'
import { ContatosPage } from '../../pages/contatos/contatos'
import { database } from "firebase"
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  usuario?: UsuarioModel;
  contatos: Array<UsuarioModel>;
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
    this.contatos = new Array<UsuarioModel>()
    this.db.on('value', data=>{
      this.usuario = data.val();
      this.getDadosContatos(this.usuario)
    })
  }

  getDadosContatos(usuario){
    //Obter informações dos contatos
    if(usuario.conversas == undefined) return;
    this.usuario.conversas.forEach(conversa=>{
      database().ref("/usuarios/"+conversa.destinatario_id).once("value", snapshot=>{
        this.contatos.push(snapshot.val())
      })
    })
  }

  openConversa(index){
    // console.log(index)
    // console.log(this.usuario.conversas[index])
    var conversa = database().ref("/conversas/"+this.usuario.conversas[index]['conversa_id']);
    this.navCtrl.push(ConversaPage, {conversa: conversa, uid: this.login.uid})
    
  }

  listContatos(){
    this.navCtrl.push(ContatosPage, {login: this.login, db: this.db})
  }

  exit(){
    this.navCtrl.setRoot(LoginPage)
  }
}
