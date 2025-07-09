import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MATERIAL_MODULES } from '../../../shared/material/material-imports';
import { ContainerComponent } from '../../../shared/container/container.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../../../shared/dialog-elements/dialog-elements.component';
import { IntersectionDirective } from '../../../shared/directives/intersection.directive';
import { fadeInUp } from '../../../shared/animations/animations';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    ContainerComponent,
    DialogElementsExampleDialog,
    IntersectionDirective,
  ],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss',
  animations: [fadeInUp],
})
export class HabilidadesComponent {
  habilidadesVisivel = signal(false);
  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  tecnologias = [
    {
      nome: 'Angular',
      descricao:
        'Angular é um framework front-end moderno, mantido pelo Google, utilizado para criar aplicações web dinâmicas e escaláveis. Baseado em TypeScript, oferece arquitetura modular, reutilização de componentes, injeção de dependência, rotas e ferramentas como o Angular CLI, que agilizam o desenvolvimento e facilitam testes, manutenção e performance em projetos de qualquer porte.',
      imagem: 'assets/angular-logo.png',
    },
    {
      nome: 'Typescript',
      descricao:
        'TypeScript é um superconjunto do JavaScript que adiciona tipagem estática opcional, permitindo identificar erros em tempo de desenvolvimento. Criado pela Microsoft, é compatível com qualquer código JavaScript e traz recursos como interfaces, enums e generics, facilitando a organização e escalabilidade de aplicações.Oferece recursos como autocompletar, verificação de erros e navegação no código.',
      imagem: 'assets/typescript-logo.png',
    },
    {
      nome: 'JavaScript',
      descricao:
        'JavaScript é a linguagem de programação usada para adicionar interatividade às páginas web. Com ela, é possível criar elementos dinâmicos como menus, formulários interativos, animações e atualizações de conteúdo sem recarregar a página. Funciona em todos os navegadores modernos e é essencial no desenvolvimento front-end, sendo frequentemente usado com HTML e CSS para criar experiências web ricas e responsivas.',
      imagem: 'assets/javascript-logo.png',
    },
    {
      nome: 'HTML',
      descricao:
        'HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar o conteúdo das páginas web. Com ela, é possível organizar textos, imagens, links, formulários e outros elementos em seções como cabeçalhos, parágrafos e listas. HTML define a base da página, permitindo que navegadores interpretem e exibam corretamente as informações. É a espinha dorsal da web, sendo usado junto com CSS e JavaScript para criar sites completos e funcionais.',
      imagem: 'assets/html-logo.png',
    },
    {
      nome: 'CSS',
      descricao:
        'CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas web. Com o CSS, é possível definir cores, fontes, tamanhos, espaçamentos, posicionamento de elementos, animações e muito mais. Ele trabalha em conjunto com o HTML, separando a estrutura do conteúdo da aparência visual. Isso facilita a manutenção e o design consistente de sites, permitindo aplicar estilos a vários elementos de forma eficiente e responsiva para diferentes dispositivos e tamanhos de tela.',
      imagem: 'assets/css-logo.png',
    },
    {
      nome: 'Git',
      descricao:
        'Git é um sistema de controle de versões distribuído, amplamente utilizado no desenvolvimento de software. Ele permite rastrear mudanças no código-fonte, colaborar com outros desenvolvedores e reverter alterações quando necessário. Com o Git, é possível trabalhar em diferentes ramificações (branches) de um projeto sem comprometer a versão principal, facilitando testes e integrações. É rápido, eficiente e funciona localmente, sendo a base de plataformas como GitHub, GitLab e Bitbucket.',
      imagem: 'assets/git-logo.png',
    },
  ];

  ativarAnimacaoHabilidades(): void {
    this.habilidadesVisivel.set(true);
  }

  openDialog(tecnologia: any): void {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 768px)');
    const isTablet = this.breakpointObserver.isMatched('(max-width: 1280px)');

    let dialogWidth = '30%';
    let dialogHeight = 'auto'; // Usar 'auto' para altura é mais flexível

    if (isMobile) {
      dialogWidth = '90vw';
    } else if (isTablet) {
      dialogWidth = '60vw';
    }

    this.dialog.open(DialogElementsExampleDialog, {
      data: tecnologia,
      panelClass: 'custom-dialog-container',
      width: dialogWidth,
      height: dialogHeight,
      maxHeight: '90vh', // Adiciona uma altura máxima para evitar que o dialog seja muito grande
    });
  }
}
