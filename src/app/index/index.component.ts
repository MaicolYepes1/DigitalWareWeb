import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdministrationService } from 'src/services/administration.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  clientes: any;
  productos: any;

  displayedColumns: string[] = ['nombres', 'apellidos', 'edad', 'acciones'];
  dataSource = new MatTableDataSource();

  displayedColumnsProducts: string[] = [
    'nombre',
    'precio',
    'fechaIngreso',
    'cantidad',
    'acciones'
  ];
  dataSourceProducts = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private _administratorService: AdministrationService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.iniciar();
  }

  iniciar() {
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

  openAdd(form: string) {
    if (form === 'client') {
      const dialogRef = this._matDialog.open(ClienteFormComponent, {});
      dialogRef.afterClosed().subscribe((data) => {
        this.iniciar();
      });
    } else if (form === 'product') {
      const dialogRef = this._matDialog.open(ProductoFormComponent, {});
      dialogRef.afterClosed().subscribe((data) => {
        this.iniciar();
      });
    }
  }

  openUpdate(form: string, e: any) {
    if (form === 'product') {
      const dialogRef = this._matDialog.open(ProductoFormComponent, {
        data: e,
      });
      dialogRef.afterClosed().subscribe((data) => {});
    } else if (form === 'client') {
      const dialogRef = this._matDialog.open(ClienteFormComponent, {
        data: e,
      });
      dialogRef.afterClosed().subscribe((data) => {});
    }
  }
}
