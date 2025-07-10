import { Component } from '@angular/core';
import { ContainerComponent } from "../../shared/container/container.component";
import { MATERIAL_MODULES } from '../../shared/material/material-imports';
import { InfoComponent } from './info/info.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContatoComponent } from "./contato/contato.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerComponent, MATERIAL_MODULES, InfoComponent, ProjetosComponent, HabilidadesComponent, ContatoComponent , RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
