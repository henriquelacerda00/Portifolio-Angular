import { Component, Input } from '@angular/core';
import { MATERIAL_MODULES } from '../material/material-imports';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() imagem!: string;
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() descricao!: string;
  @Input() linkGithub!: string;
  @Input() linkDeploy!: string;
}
