import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TiendasComponent } from './tiendas/tiendas.component';
import { LoginComponent } from './login/login.component';
import { CrearTiendaComponent } from './tiendas/crear-tienda/crear-tienda.component';
import { EditarTiendaComponent } from './tiendas/editar-tienda/editar-tienda.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrearArticuloComponent } from './articulos/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './articulos/editar-articulo/editar-articulo.component';
import { esAdminGuard } from './es-admin.guard';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tienda', component: TiendasComponent },
  { path: 'tiendas/crear', component: CrearTiendaComponent, canActivate: [esAdminGuard] },
  { path: 'tiendas/editar/:id', component: EditarTiendaComponent, canActivate: [esAdminGuard] },
  { path: 'articulo', component: ArticulosComponent },
  { path: 'articulos/crear', component: CrearArticuloComponent, canActivate: [esAdminGuard] },
  { path: 'articulos/editar/:id', component: EditarArticuloComponent, canActivate: [esAdminGuard] },
  { path: 'producto', component: ProductosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    /*TiendasComponent,*/
    LoginComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
