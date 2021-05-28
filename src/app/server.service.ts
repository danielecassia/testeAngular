import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
  private musicaServiceBehaviorSubject = new BehaviorSubject<object>([]);


  constructor(private httpClient: HttpClient) { }

  alterarMusica(valor: string) {
  this.httpClient.get('/api/name-editor').subscribe((data) => {
      console.log(data);
      this.musicaServiceBehaviorSubject.next(data);
    })
  }

  obterMusica(): BehaviorSubject<object> {
    return this.musicaServiceBehaviorSubject;
  }
}
