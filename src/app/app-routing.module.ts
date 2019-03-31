import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PiViewerComponent } from './pages/pi-viewer/pi-viewer.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'samples', component: SamplesComponent },
  { path: 'pi-viewer', component: PiViewerComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
