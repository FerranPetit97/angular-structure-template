import { ChangeDetectorRef, Component } from '@angular/core';
import { SonComponent } from '../son/son.component';

@Component({
  selector: 'app-father',
  imports: [SonComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css',
})
export class FatherComponent {
  contador = 0;

  constructor(private cd: ChangeDetectorRef) {}

  actualizar(nuevoValor: number) {
    this.contador = nuevoValor;
    // Sin zone.js, forzamos detección de cambios manualmente
    this.cd.detectChanges();
  }
}
