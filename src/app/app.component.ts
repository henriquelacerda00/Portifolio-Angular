import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_MODULES } from './shared/material/material-imports';
import { HeaderComponent } from "./shared/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MATERIAL_MODULES,
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifolio';



}
