import { Pipe, PipeTransform } from '@angular/core';
import { database } from 'firebase'

@Pipe({
  name: 'infoUser',
})
export class InfoUserPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    var dbusuario = database().ref('/usuarios/'+value)
    dbusuario.once("value",snapshot=>{
      console.log(snapshot.val());
      return snapshot.val().nome;
    })
    
  }
}
