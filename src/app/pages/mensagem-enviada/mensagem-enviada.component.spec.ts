import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemEnviadaComponent } from './mensagem-enviada.component';

describe('MensagemEnviadaComponent', () => {
  let component: MensagemEnviadaComponent;
  let fixture: ComponentFixture<MensagemEnviadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagemEnviadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensagemEnviadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
