import { Component, OnInit } from '@angular/core';

declare const activarSwiper: any;
declare const dialogo: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  //asi se inicializan funciones de js
  ngOnInit() {

    activarSwiper();
  }
  
  onClick() {
    dialogo();
  }

}
