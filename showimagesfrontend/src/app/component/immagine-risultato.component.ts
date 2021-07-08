import { ImmagineDTO } from '../dto/immagine-dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-immagine-risultato',
  template: `
    <nz-card nzHoverable style="width: 450px" [nzCover]="coverTemplate">
      <nz-card-meta [nzDescription]="immagine.description"></nz-card-meta>
    </nz-card>
    <ng-template #coverTemplate>
      <img [src]="immagine.url" />
    </ng-template>
  `
})
export class ImmagineRisultatoComponent implements OnInit {

  @Input() immagine!: ImmagineDTO;

  constructor(
  ) { }

  ngOnInit() {
  }

}
