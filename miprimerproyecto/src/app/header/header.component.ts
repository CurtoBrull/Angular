import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	currentDate : Date | null = new Date();

	resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
		this.currentDate = new Date();
		console.log(this.currentDate);


		const myName = "Javier";
		console.log("Hola " + myName);

		const suma = this.sumar(1,1);
		console.log(suma);
  }

	sumar(a: number, b: number) {
		this.resultado =  a + b;
	}

}
