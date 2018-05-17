import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { database } from "firebase"
import { UsuarioModel } from '../../model/usuario.model';
import { BuscarContatoPage } from '../buscar-contato/buscar-contato'

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage implements OnInit{

  usuario: UsuarioModel
  dbusuario: any
  login: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.login = this.navParams.get("login")
    this.dbusuario = this.navParams.get("db")

    this.dbusuario.on("value",snapshot=>{
      this.usuario = snapshot.val()
    })
  }

  searchContatos(){
    this.navCtrl.push(BuscarContatoPage, {login: this.login})
  }

  /**
   * 
   * @param contato key do contato
   */
  createConversa(contato: any){
    var dbconversa = database().ref("/conversas");
    dbconversa.push({criador: this.login.uid}).then(data=>{
      
      if(this.usuario.conversas == undefined){
        this.usuario.conversas = new Array<any>();
      }
  
      this.usuario.conversas.push({conversa_id: data.key, destinatario_id: contato})
      this.dbusuario.update(this.usuario)

      var dbdestinatario = database().ref("/usuarios/"+contato);
      dbdestinatario.once("value", snapshot=>{
        var destinatario = snapshot.val()

        if(destinatario.conversas == undefined){
          destinatario.conversas = new Array<any>()
        }

        destinatario.conversas.push({conversa_id: data.key, destinatario_id: this.login.uid})
        dbdestinatario.update(destinatario)
      })
    })

  }
}
