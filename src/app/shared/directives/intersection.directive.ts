import { Directive, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[intersection]',
  standalone: true,
})
export class IntersectionDirective implements AfterViewInit {
  @Output() intersection = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // ⚠️ Verifica se está rodando no browser
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.intersection.emit();
          observer.unobserve(this.el.nativeElement);
        }
      }, { threshold: 0.2 });

      observer.observe(this.el.nativeElement);
    } else {
      // fallback opcional (pode disparar direto ou ignorar)
      this.intersection.emit();
    }
  }
}
