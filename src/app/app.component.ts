import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { initializeApp } from 'firebase'

import { LoginPage } from '../pages/login/login';

const config = {
  apiKey: "AIzaSyC6lYQ8egwo2Mb4thFBXwa9aKPN_6Cl8dU",
  authDomain: "social-network-9e613.firebaseapp.com",
  databaseURL: "https://social-network-9e613.firebaseio.com",
  projectId: "social-network-9e613",
  storageBucket: "social-network-9e613.appspot.com",
  messagingSenderId: "193226913521"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    initializeApp(config)
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

