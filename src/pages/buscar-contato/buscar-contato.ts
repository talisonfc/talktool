import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { database } from "firebase"
import { UsuarioModel } from '../../model/usuario.model';

@IonicPage()
@Component({
  selector: 'page-buscar-contato',
  templateUrl: 'buscar-contato.html',
})
export class BuscarContatoPage implements OnInit {

  dbusuarios: any
  usuarios: Array<UsuarioModel>
  login: any;
  busca: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.login = this.navParams.get("login")
    this.dbusuarios = database().ref("usuarios")

    this.dbusuarios.once("value", snapshot=>{
      this.usuarios = new Array<UsuarioModel>();

      //console.log(snapshot.val())
      
      snapshot.forEach(element => {
        //console.log(element.val())
        if(this.login.uid !== element.key){
          var temp = new UsuarioModel();
          temp = element.val();
          temp.key = element.key
          this.usuarios.push(temp);
        }
      });
      
    })
  }

  /**
   * Metodo para adicionar contato
   */
  addContato(contact: any){
    var dbusuario = database().ref("/usuarios/"+this.login.uid)
    var dados: any
    dbusuario.once("value",snapshot=>{
      dados = snapshot.val();

      if(!dados.contatos){
        dados.contatos = new Array<any>()
      }
      dados.contatos.push(contact.key)

      dbusuario.update(dados);
      this.navCtrl.pop();
    })
  }

  searchItems($event){
  }

  find(event: any){
    if(event.code == "Enter"){
      this.dbusuarios.orderByChild("nome").equalTo(this.busca).on("value", snapshot=>{
        console.log(snapshot.val())
        if(snapshot.val() != undefined){
          this.usuarios = new Array<UsuarioModel>();
          snapshot.forEach(element => {
            if(this.login.uid !== element.key){
              var temp = new UsuarioModel();
              temp = element.val();
              temp.key = element.key
              this.usuarios.push(temp);
            }
          });          
        }
      })
    }
  }

}
