import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-v2/home.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PiViewerComponent } from './pages/pi-viewer/pi-viewer.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  // { path: 'samples', component: SamplesComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'pi-viewer', component: PiViewerComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
