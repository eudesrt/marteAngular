import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { LacamentoCadastrComponent } from './lacamento-cadastr/lacamento-cadastr.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    NavbarComponent,
    PessoasComponent,
    FormularioComponent,
    LacamentoCadastrComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    AngularFontAwesomeModule,
    TooltipModule,
    DataTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
