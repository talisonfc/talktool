import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { auth } from 'firebase'
import { HomePage } from '../../pages/home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  login(user, password){
    //console.log(user+" "+password)
    auth().signInWithEmailAndPassword(user, password).then(data=>{
      console.log(data['user'])
      this.navCtrl.setRoot(HomePage)
    }).catch(err=>{
      console.error(err);
    })
  }
}
