import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.scss']
})
export class AtributoComponent implements OnInit {

  constructor() { }

	messageType = 'error';

	inputValue = 'Holaaa';

  ngOnInit(): void {
  }

}
