import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

	name = "Javier";
	apellido = "CURTO";

	date = '2022-02-20T13:59:31.238Z'

  constructor() { }

  ngOnInit(): void {
  }

}
