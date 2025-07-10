import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '../../../shared/material/material-imports';
import emailjs from 'emailjs-com';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MATERIAL_MODULES, RouterModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', Validators.required],
  });

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    emailjs
      .sendForm(
        'service_dq6cwrs', // seu ID de serviço
        'template_g3xwvc9', // seu ID de template
        event.target as HTMLFormElement,
        'bC8Tig8eA8s3t1PJ7' // sua public key
      )
      .then(() => {
        this.formulario.reset();
        this.router.navigate(['/mensagem-enviada']);
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
      });
  }
}
