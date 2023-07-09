import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  @Input() valorContador!: number;
  @Output() eventoContador = new EventEmitter();

  incrementar(): void {
    this.valorContador++;
    this.eventoContador.emit(this.valorContador);
  }

  decrementar(): void {
    this.valorContador--;
    this.eventoContador.emit(this.valorContador);
  }

  reiniciar(): void {
    this.valorContador = 0;
    this.eventoContador.emit(this.valorContador);
  }

  appValorEventBinding($event: any): void {
    this.eventoContador.emit($event.target.value);
  }
}
