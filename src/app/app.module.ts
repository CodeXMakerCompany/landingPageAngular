import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// lIBS
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { headerComponent } from './components/header/header.component';
import { bodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    bodyComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
