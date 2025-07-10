import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material-imports';
import { ContainerComponent } from '../../shared/container/container.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mensagem-enviada',
  standalone: true,
  imports: [CommonModule,MATERIAL_MODULES,ContainerComponent,RouterModule],
  templateUrl: './mensagem-enviada.component.html',
  styleUrl: './mensagem-enviada.component.scss'
})
export class MensagemEnviadaComponent {

}
