import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit(): void { }

  get musica(): object {
    return this.serverService.obterMusica().value;
  }

}
