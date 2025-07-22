import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  imports: [],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent {
  @Input() valor!: number;
  @Output() valorChange = new EventEmitter<number>();

  incrementar() {
    this.valorChange.emit(this.valor + 1);
  }
}
