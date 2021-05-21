import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTranferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTranferencias = [];
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia:any){
    this.hidratar(transferencia);
    this.listaTranferencias.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

  get transferencias(){
    return this.listaTranferencias;
  }
}
