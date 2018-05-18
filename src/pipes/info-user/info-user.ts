import { Pipe, PipeTransform } from '@angular/core';
import { database } from 'firebase'

@Pipe({
  name: 'infoUser',
})
export class InfoUserPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  async transform(value: string) {
    this.find(value).then(data=>{
      console.log(data)
      return data;
    })
    
  }

  find(value){
    var p = new Promise(resolve=>{
      var dbusuario = database().ref('/usuarios/'+value)
      dbusuario.once("value",snapshot=>{
        // console.log(snapshot.val().nome);
        resolve(snapshot.val().nome);
      })
    })
    return p;
  }
}
