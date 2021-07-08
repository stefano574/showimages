import { RicercaImmaginiRisultatoComponent } from './component/ricerca-immagini-risultato.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // https://stackoverflow.com/questions/64874221/property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor
  @ViewChild('ricercaImmaginiRisultatoComponent') ricercaImmaginiRisultatoComponent!: RicercaImmaginiRisultatoComponent;

  termine: string = '';

  private timerId: any;


  constructor(
  ) {
  }


  ricerca(): void {
    if (this.timerId !== undefined) {
      clearTimeout(this.timerId);
    }
    this.timerId = setTimeout(() => {
      this.cerca();
    }, 500);
  }

  private cerca(): void {

    this.ricercaImmaginiRisultatoComponent.nuovaRicerca(this.termine);

  }


}
