import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../material/material-imports';

@Component({
  selector: 'dialog-elements-example-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MATERIAL_MODULES],
  template: `
    <h2 mat-dialog-title>{{ data.nome }}</h2>
    <img [src]="data.imagem" alt="Logo {{ data.nome }}" class="dialog-logo" />
    <mat-dialog-content>
      <p>{{ data.descricao }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <button mat-flat-button mat-dialog-close>Fechar</button>
    </mat-dialog-actions>
  `,
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
