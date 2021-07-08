import { ImmagineDTO } from '../dto/immagine-dto';

import { ShowImagesService } from './show-images.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImmaginiService extends ShowImagesService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  ricerca(termine: string, pagina: number) : Observable<ImmagineDTO[]> {
    if (!termine || !pagina || pagina < 1) {
      return of([]);
    }

    let params = new HttpParams();
    params = params.append('termine', termine);
    params = params.append('pagina', pagina.toString());

    return super.get<ImmagineDTO[]>('/immagini/ricerca', params);
  }

}
