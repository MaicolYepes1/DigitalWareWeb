import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
},
];

@NgModule({
  declarations: [
    IndexComponent,
    ClienteFormComponent,
    ProductoFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class IndexModule { }
