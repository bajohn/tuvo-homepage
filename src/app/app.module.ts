import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { PiViewerComponent } from './pages/pi-viewer/pi-viewer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselComponent } from './subcomponents/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SamplesComponent,
    PiViewerComponent,
    ContactComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
