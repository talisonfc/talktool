import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ConversaModel } from '../../model/conversa.model'

@IonicPage()
@Component({
  selector: 'page-conversa',
  templateUrl: 'conversa.html',
})
export class ConversaPage implements OnInit, OnDestroy{

  @ViewChild(Content) content: Content;
  
  conversa: ConversaModel;
  index_end_conteudo: number = 0;
  message: string = "";
  fluxo: any;
  uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.conversa = new ConversaModel();
  }

  ngOnInit(): void {
    console.log("[ngOnInit]")
    this.fluxo = this.navParams.get("conversa")
    this.uid = this.navParams.get("uid");
    
    this.fluxo.on("value", data=>{
      console.log("[ONCE FIREBASE EVENT]")
      this.conversa = data.val();
      console.log(this.conversa)
      if(this.conversa.conteudo !== undefined){
        console.log("[CONVERSA CONTEUDO != undefined]")
        this.index_end_conteudo = this.conversa.conteudo.length;
        this.scrollToBottom(200);
      }
    })
    
  }

  ngOnDestroy(): void {
    
  }

  scrollToBottom(delay:number):void{
    setTimeout(()=>{
      this.content.scrollToBottom(delay);
    },1000)
  }

  sendMessage(){
    this.index_end_conteudo++;
    if(this.conversa.conteudo===undefined){
      this.conversa.conteudo = new Array<any>();
    }

    if(this.uid == this.conversa.criador){
      this.conversa.conteudo.push({autor: 'a', text: this.message})
    }
    else{
      this.conversa.conteudo.push({autor: 'b', text: this.message})
    }
    
    this.fluxo.update(this.conversa);
    this.message = "";
    //this.scrollToBottom(100);
  }

  confirme(event: any){
    if(event.key == "Enter"){
      this.sendMessage();
    }
  }

  removeMessage(ind:number){
    this.index_end_conteudo--;
    this.conversa.conteudo.splice(ind,1);
    this.fluxo.update(this.conversa);
  }

  recordVoice(){}
}
