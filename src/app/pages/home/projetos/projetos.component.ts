import { Component, signal } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { cardFlipFadeIn, fadeInUp } from '../../../shared/animations/animations';
import { IntersectionDirective } from '../../../shared/directives/intersection.directive';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CardComponent, CommonModule , IntersectionDirective],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
  animations: [fadeInUp , cardFlipFadeIn],
})
export class ProjetosComponent {

  tituloVisivel = signal(false);

  cards = [
    {
      imagem: 'assets/indexa.png',
      titulo: 'Indexa',
      subtitulo: 'Agenda Digital',
      descricao:
        'Aplicação web desenvolvida com Angular que simula uma agenda de contatos. Ensina conceitos como formulários reativos, rotas, componentização e consumo de APIs REST com json-server, usando boas práticas e organização de código.',
      linkGithub: 'https://github.com/henriquelacerda00/indexa',
      linkDeploy: 'https://indexa-weld.vercel.app/lista-contatos',
    },
    {
      imagem: 'assets/Alurabook.png',
      titulo: 'Alurabook',
      subtitulo: 'React Form Angular',
      descricao:
        'Formulário de cadastro em Angular utilizando Reactive Forms, com validações como campos obrigatórios, email válido e tamanho mínimo de senha. Integração com a API do IBGE (ou ViaCEP) para validar o CEP e preencher automaticamente os dados de endereço. Projeto baseado no layout do AluraBooks, com foco em boas práticas, componentização e uso de serviços.',
      linkGithub: 'https://github.com/henriquelacerda00/AngularTemplateForm',
      linkDeploy: 'https://angular-template-form-silk.vercel.app/cadastro',
    },
    {
      imagem: 'assets/buscante.png',
      titulo: 'Buscante',
      subtitulo: 'Busque seus livros favoritos',
      descricao:
        'O Buscante é uma aplicação Angular que consome a API da Open Library para buscar livros. Usa Angular Material na interface, serviços para requisições HTTP com HttpClient, componentes reutilizáveis e exibe os resultados em cards com título, autor e imagem. O projeto reforça conceitos como binding, diretivas, pipes, consumo de APIs e boas práticas em Angular.',
      linkGithub: 'https://github.com/henriquelacerda00/Angular-Rxjs-Buscante',
      linkDeploy: 'https://angular-rxjs-buscante.vercel.app/lista-livros',
    },
    {
      imagem: 'assets/lista-tarefas.png',
      titulo: 'Memorando',
      subtitulo: 'Lista de tarefas dinâmicas',
      descricao:
        'O Projeto Memorando da Alura é uma aplicação web em Angular que permite criar, editar, listar e excluir anotações armazenadas localmente no navegador usando localStorage. Ele serve para praticar conceitos essenciais do Angular como componentes, serviços, formulários e injeção de dependência, além de demonstrar como implementar persistência local sem backend. O app tem interface simples e responsiva, focada na experiência do usuário, e é um ótimo ponto de partida para projetos que precisam manipular dados no frontend de forma organizada e eficiente.',
      linkGithub: 'https://github.com/henriquelacerda00/Angular-ListaTarefas',
      linkDeploy: 'https://angular-lista-tarefas.vercel.app/listaTarefas',
    },
    {
      imagem: 'assets/jornadaMilhas.png',
      titulo: 'Jornada Milhas',
      subtitulo: 'Agência de viagens',
      descricao:
        'O projeto Jornada Milhas é uma aplicação Angular que simula o site de uma agência de viagens, exibindo destinos promocionais, depoimentos de clientes e imagens ilustrativas. Utiliza Angular Material, rotas e componentização para criar uma interface moderna, responsiva e bem estruturada.',
      linkGithub: 'https://github.com/henriquelacerda00/alura-JornadaMilhas',
      linkDeploy: 'https://alura-jornada-milhas.vercel.app/home',
    },
    // pode adicionar mais cards aqui

  ];

  cardsVisiveis = this.cards.map(() => signal(false));

  ativarAnimacao() {
    this.tituloVisivel.set(true);
  }

  ativarAnimacaoCard(index: number) {
    this.cardsVisiveis[index].set(true);
  }
}
