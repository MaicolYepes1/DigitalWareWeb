import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/clienteModel';
import { Producto } from '../models/productoModel';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', 'Content-Type');
  
  constructor(public http: HttpClient) {}

  addOrUpdateClient(client: Client): Observable<Client> {
    return this.http.post<any>(environment.url + environment.Clientes, client);
  }

  addOrUpdateProducto(user: any): Observable<Producto> {
    return this.http.post<any>(environment.url + environment.Productos, user);
  }

  getProductos() {
    return this.http.get<Producto>(environment.url + environment.Productos, {
      headers: this.headers,
    });
  }

  getClientes() {
    return this.http.get<Client>(environment.url + environment.Clientes, {
      headers: this.headers,
    });
  }

}
