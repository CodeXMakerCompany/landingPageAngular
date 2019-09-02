import { Component } from '@angular/core';

declare const infoPerfil: any;
declare const pedido: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent {
	onClick() {
    infoPerfil();
  	}

  onClick2() {
    pedido();
  }

}
