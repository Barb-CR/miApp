import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionSheetController } from '@ionic/angular';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { IonicModule } from '@ionic/angular';

import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscarComponent } from './buscar/buscar.component';
import { VistadetallesComponent } from './vistadetalles/vistadetalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    
    ProductosComponent,
         BuscarComponent,
         VistadetallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [ActionSheetController],
  bootstrap: [AppComponent]
})
export class AppModule { }
