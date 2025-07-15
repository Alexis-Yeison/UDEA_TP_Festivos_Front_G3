import { Injectable } from '@angular/core';
import { enviroment } from '../../env/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FestivoEntity } from '../../shared/entities/festivoEntity';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private url = `${enviroment.urlBase}festivos/`;

  constructor(private http: HttpClient) { }

  public verificar(año: number, mes: number, dia: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}verificar/${año}/${mes}/${dia}`);
  }

  public listar(año: number): Observable<FestivoEntity[]> {
    return this.http.get<FestivoEntity[]>(`${this.url}listar/${año}`);
  }

}
