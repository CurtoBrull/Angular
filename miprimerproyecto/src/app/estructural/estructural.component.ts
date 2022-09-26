import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})
export class EstructuralComponent implements OnInit {

	isError = false;

	sections = [
		'Introduccion',
		'Usos de Angular',
		'Instalación',
		'CLI',
		'Components'
	]

	objects = [
		{
			id: 1,
			name: 'Intro',
			duracion: 10,
		},
		{
			id: 2,
			name: 'Usos de Angular',
			duracion: 15,
		},
		{
			id: 3,
			name: 'Instalación',
			duracion: 12,
		},
	]

  constructor() { }

  ngOnInit(): void {
		// setTimeout(() => {
		// 	this.isError = true;
		// }, 4000);

		setTimeout(() => {
			this.objects.push({
				id: 4,
				name: 'CLI',
				duracion: 23,
			})
		}, 4000);
  }

	showError() {
		this.isError = true;
	}

}
