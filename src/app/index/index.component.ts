import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdministrationService } from 'src/services/administration.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  clientes: any;
  productos: any;

  displayedColumns: string[] = ['nombres', 'apellidos', 'edad'];
  dataSource = new MatTableDataSource();

  displayedColumnsProducts: string[] = [
    'nombre',
    'precio',
    'fechaIngreso',
    'cantidad',
  ];
  dataSourceProducts = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private _administratorService: AdministrationService) {}

  ngOnInit(): void {
    this.getClientes();
    this.getProductos();
  }

  getClientes() {
    this._administratorService.getClientes().subscribe(
      (Ok) => {
        this.clientes = Ok;
        this.dataSource.data = this.clientes;
      },
      (Response) => {}
    );
  }

  getProductos() {
    this._administratorService.getProductos().subscribe(
      (Ok) => {
        this.productos = Ok;
        this.dataSourceProducts.data = this.productos;
      },
      (Response) => {}
    );
  }
}
