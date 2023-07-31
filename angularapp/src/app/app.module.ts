import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CrearTiendaComponent } from './tiendas/crear-tienda/crear-tienda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioTiendasComponent } from './tiendas/formulario-tiendas/formulario-tiendas.component';
import { EditarTiendaComponent } from './tiendas/editar-tienda/editar-tienda.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormularioArticulosComponent } from './articulos/formulario-articulos/formulario-articulos.component';
import { CrearArticuloComponent } from './articulos/crear-articulo/crear-articulo.component';
//import { MatTableModule } from '@angular/material/table';
//import { CdkTableModule } from '@angular/cdk/table';

import { TiendasComponent } from './tiendas/tiendas.component';
import { EditarArticuloComponent } from './articulos/editar-articulo/editar-articulo.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTiendaComponent,
    FormularioTiendasComponent,
    EditarTiendaComponent,
    ArticulosComponent,
    FormularioArticulosComponent,
    CrearArticuloComponent
    , TiendasComponent, EditarArticuloComponent, AutorizadoComponent, LayoutComponent, FooterComponent, ProductosComponent, InputImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
    //,MatTableModule,
    //CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
