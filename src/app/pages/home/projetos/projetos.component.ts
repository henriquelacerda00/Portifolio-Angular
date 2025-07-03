import { Component } from '@angular/core';
import { CardComponent } from "../../../shared/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  cards = [
  {
    imagem: 'assets/indexa.png',
    titulo: 'Indexa',
    subtitulo: 'Agenda Digital',
    descricao: 'Aplicação web desenvolvida com Angular que simula uma agenda de contatos. Ensina conceitos como formulários reativos, rotas, componentização e consumo de APIs REST com json-server, usando boas práticas e organização de código.',
    linkGithub: 'https://github.com/henriquelacerda00/indexa',
    linkDeploy: 'https://indexa-weld.vercel.app/lista-contatos'
  },
  {
    imagem: 'assets/Alurabook.png',
    titulo: 'Alurabook',
    subtitulo: 'React Form Angular',
    descricao: 'Formulário de cadastro em Angular utilizando Reactive Forms, com validações como campos obrigatórios, email válido e tamanho mínimo de senha. Integração com a API do IBGE (ou ViaCEP) para validar o CEP e preencher automaticamente os dados de endereço. Projeto baseado no layout do AluraBooks, com foco em boas práticas, componentização e uso de serviços.',
    linkGithub: 'https://github.com/henriquelacerda00/AngularTemplateForm',
    linkDeploy: 'https://angular-template-form-silk.vercel.app/cadastro'
  },
  // pode adicionar mais cards aqui
];
}
