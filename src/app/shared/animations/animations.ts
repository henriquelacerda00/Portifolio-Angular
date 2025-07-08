import { trigger, state, style, transition, animate , group } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(50px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden => visible', animate('900ms ease-out'))
]);

export const cardFlipFadeIn = trigger('cardFlipFadeIn', [
  state('hidden', style({
    opacity: 0,
    transform: 'rotateY(180deg) scale3d(1, 1, 1)',
  })),
  state('visible', style({
    opacity: 1,
    transform: 'rotateY(360deg) scale3d(1, 1, 1)',
  })),
  transition('hidden => visible', group([
    animate('850ms ease-out', style({ transform: 'rotateY(360deg) scale3d(1, 1, 1)' })),
    animate('1s ease-in', style({ opacity: 1 })),
  ])),
]);
