import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  contatos: Array<UsuarioModel>;
  dbusuario: any
  login: any;

  constructor(private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.login = this.navParams.get("login")
    this.dbusuario = this.navParams.get("db")

    this.contatos = new Array<UsuarioModel>()
    this.dbusuario.on("value",snapshot=>{
      this.usuario = snapshot.val()
      this.getDadosContatos(this.usuario);
    })
  }

  getDadosContatos(usuario){
    //Obter informações dos contatos
    if(usuario.contatos == undefined) return;
    this.usuario.contatos.forEach(uid=>{
      database().ref("/usuarios/"+uid).once("value", snapshot=>{
        this.contatos.push(snapshot.val())
      })
    })
  }

  searchContatos(){
    this.navCtrl.push(BuscarContatoPage, {login: this.login})
  }

  /**
   * 
   * @param contato key do contato
   */
  createConversa(index){
    var contato_id = this.usuario.contatos[index]

    if(this.usuario.conversas == undefined){
      this.usuario.conversas = new Array<any>();
    }

    //Já existe pelo menos uma conversa cridada
    if(this.usuario.conversas.length>0){
      let conversa_criada = false;
      this.usuario.conversas.forEach((conversa)=>{
        if(conversa.destinatario_id == contato_id){
          conversa_criada = true;
          let toast = this.toast.create({
            message: "Você já está conversando com este contato",
            duration: 3000
          })
          toast.present();
          return;
        }
      })
      
      if(!conversa_criada){
        this.createConversaProcess(contato_id)
      }
      
    }
    else{//Não existe nenhuma conversa criada
      this.createConversaProcess(contato_id)
    }
  }

  createConversaProcess(contato_id){
    var dbconversa = database().ref("/conversas");
    dbconversa.push({criador: this.login.uid}).then(data=>{
  
      this.usuario.conversas.push({conversa_id: data.key, destinatario_id: contato_id})
      this.dbusuario.update(this.usuario)

      var dbdestinatario = database().ref("/usuarios/"+contato_id);
      dbdestinatario.once("value", snapshot=>{
        var destinatario = snapshot.val()

        if(destinatario.conversas == undefined){
          destinatario.conversas = new Array<any>()
        }

        destinatario.conversas.push({conversa_id: data.key, destinatario_id: this.login.uid})
        dbdestinatario.update(destinatario)
        this.navCtrl.pop();
      })
    })
  }
}
