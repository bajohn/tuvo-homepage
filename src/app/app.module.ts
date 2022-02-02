import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-v2/home.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { PiViewerComponent } from './pages/pi-viewer/pi-viewer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselComponent } from './subcomponents/carousel/carousel.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SamplesComponent,
    PiViewerComponent,
    ContactComponent,
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
