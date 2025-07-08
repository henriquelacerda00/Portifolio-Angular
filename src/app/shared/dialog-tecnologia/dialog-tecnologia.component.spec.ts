import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTecnologiaComponent } from './dialog-tecnologia.component';

describe('DialogTecnologiaComponent', () => {
  let component: DialogTecnologiaComponent;
  let fixture: ComponentFixture<DialogTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTecnologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
