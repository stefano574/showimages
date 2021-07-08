import { RicercaImmaginiRisultatoComponent } from './component/ricerca-immagini-risultato.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ImmagineRisultatoComponent } from './component/immagine-risultato.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    RicercaImmaginiRisultatoComponent,
    ImmagineRisultatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzLayoutModule,
    NzGridModule,
    NzInputModule,
    NzCardModule,

    InfiniteScrollModule
  ],
  providers: [{ provide: NZ_I18N, useValue: it_IT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
