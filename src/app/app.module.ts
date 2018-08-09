import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    LancamentosModule,
    PessoaModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
