import { ImmagineDTO } from '../dto/immagine-dto';
import { Component, OnInit } from '@angular/core';
import { ImmaginiService } from '../service/immagini.service';

@Component({
  selector: 'app-ricerca-immagini-risultato',
  templateUrl: './ricerca-immagini-risultato.component.html'
})
export class RicercaImmaginiRisultatoComponent implements OnInit {

  termine: string = '';
  pagina: number = 1;

  risultato: ImmagineDTO[] = []

  constructor(
    private immaginiService: ImmaginiService
  ) { }

  ngOnInit() {
  }

  nuovaRicerca(termine: string) {
    this.risultato.splice(0, this.risultato.length);

    this.termine = termine;
    this.pagina = 1;

    this.cerca();
  }

  onScroll() {
    this.pagina++;
    this.cerca();
  }

  cerca() {

    this.immaginiService.ricerca(this.termine, this.pagina).subscribe((immaginiDTO: ImmagineDTO[]) => {
      this.risultato = [ ...this.risultato, ...immaginiDTO];
    });

  }


}
