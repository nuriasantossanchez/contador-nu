import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  appValor: number = 3;

  /**
   * funcion para gestionar el valor devuelto por el evento emisor,
   * el evento emisor es eventoContador(), el que hace el emit
   * @param event
   */
  eventListener(event: number): void {
    this.appValor = event;
  }
}
