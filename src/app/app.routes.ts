import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MensagemEnviadaComponent } from './pages/mensagem-enviada/mensagem-enviada.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mensagem-enviada',
    component: MensagemEnviadaComponent
  }
];
