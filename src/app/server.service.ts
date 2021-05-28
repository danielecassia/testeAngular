import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
  private musicaServiceBehaviorSubject = new BehaviorSubject<object>([]);


  constructor(private httpClient: HttpClient) { }

  get hhh() :boolean {
    return this.estado;
  }

  estado = false;

  alterarMusica(valor: string) {
  this.httpClient.post('/api/name-editor', {filtro: valor}).subscribe((data) => {
      console.log(data);
      this.estado = true;
      this.musicaServiceBehaviorSubject.next(data);
    })
  }

  obterMusica(): BehaviorSubject<any> {
    return this.musicaServiceBehaviorSubject;
  }
}
