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
  messeges?: Array<{autor: string, text: string}>
  index_end_conteudo: number = 0;
  message: string = "";
  fluxo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.conversa = new ConversaModel();
    this.messeges = new Array<{autor: string, text: string}>()
  }

  ngOnInit(): void {
    this.fluxo = this.navParams.get("conversa")
    
    this.fluxo.once("value", data=>{

      this.conversa = data.val();
      //console.log(this.conversa)
      if(this.conversa.conteudo !== undefined){
        this.index_end_conteudo = this.conversa.conteudo.length;
        this.messeges = this.conversa.conteudo;
      }
    })

    this.fluxo.on("child_added", data=>{
      console.log(data.val())
      this.messeges = new Array<any>();
      this.messeges.push(data.val()[0]);
    })

    this.fluxo.on("child_changed", data=>{
      this.messeges = data.val();
    })

    this.fluxo.on("child_removed", data=>{
      this.messeges = undefined;
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
    this.conversa.conteudo.push({autor: 'a', text: this.message})
    this.fluxo.update(this.conversa);
    this.message = "";
    //this.scrollToBottom(100);
  }

  removeMessage(ind:number){
    this.index_end_conteudo--;
    this.conversa.conteudo.splice(ind,1);
    this.fluxo.update(this.conversa);
  }

  recordVoice(){}
}
