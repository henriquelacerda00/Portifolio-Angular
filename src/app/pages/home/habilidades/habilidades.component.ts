import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../../shared/material/material-imports';
import { ContainerComponent } from '../../../shared/container/container.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../../../shared/dialog-elements/dialog-elements.component';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule, MATERIAL_MODULES , ContainerComponent ,DialogElementsExampleDialog],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss',
})
export class HabilidadesComponent {

  constructor(public dialog: MatDialog) {}

  tecnologias = [
    {
      nome: 'Angular'
    },
    {
      nome: 'Typescript'
    },
    {
      nome: 'JavaScript'
    },
    {
      nome: 'HTML'
    },
    {
      nome: 'CSS'
    },
    {
      nome: 'Git',
    },
  ]

  openDialog(tecnologia : any): void {
    this.dialog.open(DialogElementsExampleDialog , {
      width: '30%',
      height: '50%',
      data: tecnologia
    });
  }
}
