import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animales:Array<any> = [
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Miau miau',edad:5},
    {tipo:'Pato',nombre:'pepito',edad:7}
  ]  
}
