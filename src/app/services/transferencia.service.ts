import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTranferencias: any[];

  constructor() {
    this.listaTranferencias = [];
  }

  adicionar(transferencia:any){
    console.log(transferencia);
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
