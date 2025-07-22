import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  imports: [],
  templateUrl: './son.html',
  styleUrl: './son.css',
})
export class Son {
  @Input() valor!: number;
  @Output() valorChange = new EventEmitter<number>();

  incrementar() {
    this.valorChange.emit(this.valor + 1);
  }
}
