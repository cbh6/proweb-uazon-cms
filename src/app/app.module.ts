import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConnectionBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './shared/services/api/api.service';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule],
  providers: [
    {
      provide: ApiService,
      deps: [ConnectionBackend, RequestOptions],
      useFactory: (backend, options) => {
        return new ApiService(backend, options);
      }
    }
    // habria que hacer modulos de dominio, libros, autores.. etc
    // y probeer en su modulo su servicio (aunque solo lo podrá usar el)
    // aqui por simplicidad se mete en app pero habra que distribuir
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
