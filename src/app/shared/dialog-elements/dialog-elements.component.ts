import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'dialog-elements-example-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>{{ data.nome }}</h2>
    <mat-dialog-content>
      <p>Aqui você pode colocar mais informações sobre {{ data.nome }}.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Fechar</button>
    </mat-dialog-actions>
  `,
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
