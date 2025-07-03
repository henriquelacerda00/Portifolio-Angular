import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../material/material-imports';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MATERIAL_MODULES,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
