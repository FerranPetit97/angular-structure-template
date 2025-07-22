import { ChangeDetectorRef, Component } from '@angular/core';
import { Son } from './son/son';

@Component({
  selector: 'app-father',
  imports: [Son],
  templateUrl: './father.html',
  styleUrl: './father.css',
})
export class Father {
  contador = 0;

  constructor(private cd: ChangeDetectorRef) {}

  actualizar(nuevoValor: number) {
    this.contador = nuevoValor;
    // Sin zone.js, forzamos detección de cambios manualmente
    this.cd.detectChanges();
  }
}
