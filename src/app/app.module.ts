import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { ConversaPage } from '../pages/conversa/conversa'
import { ContatosPage } from '../pages/contatos/contatos'
import { BuscarContatoPage } from '../pages/buscar-contato/buscar-contato'

import { DatabaseProvider } from '../providers/database/database';
import { PipesModule } from "../pipes/pipes.module"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConversaPage,
    ContatosPage,
    LoginPage,
    BuscarContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConversaPage,
    ContatosPage,
    LoginPage,
    BuscarContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
